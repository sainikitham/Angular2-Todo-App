export class Init{
  load(){
    if(localStorage.getItem('todos') === null){
      console.log("createing...")
      var todos = [
        {
          text:"pick up kids"
        },
        {
          text:"meeting with boss"
        },
        {
          text:"take out trash"
        }
      ]
      localStorage.setItem('todos',JSON.stringify(todos));
      return
    }
    else{
      console.log("found todos");
    }
  }
}
