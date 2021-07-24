export default class Weather {
  constructor(data) {
    this.name = data.name
    this.temp = data.temp || data.main.temp
  }

  get Template() {
    return `
    <div>${this.temp} - ${this.name}</div>
    `
  }
}