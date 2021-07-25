import { ProxyState } from "../AppState.js";
import { todoService } from "../Services/ToDoService.js";

// function _drawToDo() {
//   document.getElementById("todolist").innerHTML = template
// }
export default class ToDoController {
  constructor() {
  }
  async postToDo() {
    try {
      await todoService.postToDo()
    } catch (error) {
      console.error("something went wrong in adding that post")
    }
  }
}