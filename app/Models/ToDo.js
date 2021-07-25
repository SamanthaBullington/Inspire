export default class ToDo {
  constructor(data) {
    this.id = data.id  //required
    this.completed = false //required
    this.user = data.user //required
    this.description = data.description
  }

  get Template() {
    return /*html*/``
  }
}