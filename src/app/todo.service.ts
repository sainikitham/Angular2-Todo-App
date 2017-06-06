import { Injectable } from '@angular/core';
import {Init} from './init-todos';
@Injectable()
export class TodoService extends Init{
  todos;
  constructor() {
    super();
   console.log("serv start");
   this.load();
  }

  getTodos(){
    var todos = JSON.parse(localStorage.getItem('todos'));
    return todos;
  }
}
