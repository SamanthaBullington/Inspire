export default class ToDo {
  constructor(data) {
    this.id = data.id  //required
    this.completed = data.completed //required
    this.user = data.user //required
    this.description = data.description
  }

  ///NO TASKS = NO LISTS
  get Template() {
    return /*html*/`<div class="">
    <div class="rounded shadow-light bg-light" onload="app.toDoController._drawToDo()">
      <div class="d-flex justify-content-around align-items-center rounded-top text-light text-center p-3">
      <li class= "taskCard">
      <label for="checkbox">
      <input type="checkbox" onclick="app.toDoController.toggleCheckbox('${this.id}')" value="" ${this.completed ? "checked" : ""} class="m-2">
      ${this.description} 
      <span input="checkbox" class="fa fa-times action" onclick="app.toDoController.removeToDo('${this.id}')"></span></label></li></div></div></div>
      <div class="p-2 d-flex">
      <form onsubmit="app.toDoController.postToDo()" class="p-2">
          <input type="text" name="toDoAdd" placeholder="Task..." required minlength="3"
              width="48">
          <button type="submit" class="btn btnEdit">Add task +</button>
      </form>
  </div>`
  }
}