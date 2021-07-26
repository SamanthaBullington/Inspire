import { ProxyState } from "../AppState.js";
import { todoService } from "../Services/ToDoService.js";

function _drawToDo() {
  let template = ''
  let todo = ProxyState.currentToDo
  todo.forEach(todo => template += todo.Template)
  document.getElementById("todolist").innerHTML = template
}
export default class ToDoController {
  constructor() {
    ProxyState.on('currentToDo', _drawToDo)
  }
  async postToDo() {
    event.preventDefault()
    let form = event.target
    let newtodo = {
      description: form.toDoAdd.value
    }
    try {
      await todoService.postToDo(newtodo)
    } catch (error) {
      console.error("something went wrong in adding that post", error)
    }
    form.reset()
  }
  removeToDo(id) {
    if (confirm("Remove To-do?")) {
      todoService.removeToDo(id)
      console.log("To-Do removed");
    } else {
      console.log("To-Do not removed!");
    }
  }
  toggleCheckbox(id) {
    todoService.toggleCheckbox(id)
    console.log('toggle')
  }
}