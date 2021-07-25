import { ProxyState } from "../AppState.js";
import ToDo from "../Models/ToDo.js";
import { sandbox } from '../Services/AxiosService.js'


class ToDoService {

  // async getToDo() {
  //   const res = await sandbox.get('sambullington/todos')
  //   console.log(res.data);
  //   ProxyState.currentToDo = res.data.map(t => new ToDo(s))
  // }
  async postToDo() {
    const res = await sandbox.post('sambullington/todos', ProxyState.currentToDo)
    console.log(res.data)
    const newtodo = new ToDo(res.data)
    ProxyState.currentToDo = [...ProxyState.currentToDo, newtodo]
  }
}

export const todoService = new ToDoService();