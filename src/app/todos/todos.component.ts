import { Component, OnInit } from '@angular/core';
import  {TodoService} from '../todo.service';
@Component({
  moduleId:module.id,
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos;
  text;
  oldtext;
  i;
  appState = "default";
   constructor(private _todoservice:TodoService) {

   }
  ngOnInit() {
    this.todos = this._todoservice.getTodos();
  }
  addtodo(){
    this.todos.push({
      text:this.text
    });
    this.text = "";
    localStorage.setItem('todos',JSON.stringify(this.todos));
  }
  deletetodo(i){
    this.todos.splice(i,1);
    localStorage.setItem('todos',JSON.stringify(this.todos));
  }
  edittodo(txt){
    this.text = txt;
    this.oldtext = txt;
    this.appState = "edit";
  }
  updatetodo(){
    for(this.i = 0;this.i < this.todos.length; this.i++){
      if(this.todos[this.i].text == this.oldtext){
        this.todos[this.i].text = this.text;
      }
    }
    localStorage.setItem('todos',JSON.stringify(this.todos));
    this.text = "";
  }
}
