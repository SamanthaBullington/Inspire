export default class ToDo {
  constructor(data) {
    this.id = data.id  //required
    this.completed = false //required
    this.user = data.user //required
    this.description = data.description
  }

  get Template() {
    return /*html*/`<li class= "taskCard"><label for="checkbox"><div onclick="app.toDoController.toggleCheckbox('${this.id}')"><input type="checkbox" value="" ${this.completed ? "completed" : ""} class="m-2">${this.description} 
    <span input="checkbox" class="fa fa-times action" onclick="app.todoController.removeTask('${this.id}')"></span></label></div></li>`
  }
}