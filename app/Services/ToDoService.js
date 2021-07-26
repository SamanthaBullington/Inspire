import { ProxyState } from "../AppState.js";
import ToDo from "../Models/ToDo.js";
import { sandbox } from '../Services/AxiosService.js'


class ToDoService {

  // async getToDo() {
  //   const res = await sandbox.get('sambullington/todos')
  //   console.log(res.data);
  //   ProxyState.currentToDo = res.data.map(t => new ToDo(s))
  // }
  async postToDo(userdata) {
    const res = await sandbox.post('sambullington/todos', userdata)
    console.log(res.data)
    console.log('todoservice posttodo')
    const newtodo = new ToDo(res.data)
    ProxyState.currentToDo = [...ProxyState.currentToDo, newtodo]
  }
  removeToDo(id) {
    ProxyState.currentToDo = ProxyState.currentToDo.filter(todo => todo.id != id)
  }
  toggleCheckbox(id) {
    console.log('toggling')
    let found = ProxyState.currentToDo.find(t => id == t.id)
    found.completed = !found.completed
    ProxyState.currentToDo = ProxyState.currentToDo
  }

  async loadToDo() {
    const res = await sandbox.get('sambullington/todos')
    console.log("hello from tdserve" + res.data);
    ProxyState.currentToDo = res.data.map(s => new ToDo(s))
    console.log(ProxyState.currentToDo)
  }
}

export const todoService = new ToDoService();