import { ProxyState } from "../AppState.js";
import { todoService } from "../Services/ToDoService.js";

function _drawToDo() {
  let template = ''
  let todo = ProxyState.currentToDo
  todo.forEach(todo => template += todo.Template)
  document.getElementById("todolist").innerHTML = template
  _drawCount()
}

function _drawCount() {
  let template = ''
  let finished = 0
  let totalToDo = 0
  ProxyState.currentToDo.forEach(task => {
    if (task.completed) {
      finished++
    }
    totalToDo++
  })
  template = `${finished}/${totalToDo}`
  document.getElementById("taskcount").innerText = template
}
export default class ToDoController {
  constructor() {
    ProxyState.on('currentToDo', _drawToDo)
    this.loadToDo()
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
  async removeToDo(id) {
    try {
      await todoService.removeToDo(id)
    } catch (error) {
      console.error('invalid id' + error)
    }
  }
  toggleCheckbox(id) {
    todoService.toggleCheckbox(id)
    console.log('toggle')
  }

  // showToDo() {
  //   var todolist = document.getElementById("myToDo");
  //   if (todolist.style.display === "none") {
  //     todolist.style.display = "block";
  //   } else {
  //     todolist.style.display = "none";
  //   }
  // }

  async loadToDo() {
    console.log('loadToDo controller')
    try {
      await todoService.loadToDo()
    } catch (error) {
      console.error("failed to get To Do list")
    }
  }
}