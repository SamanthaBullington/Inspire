export default class Quote {
  constructor(data) {
    this.author = data.author;
    this.content = data.content;
  }

  get Template() {
    return `
    <div>${this.content} - ${this.author}</div>

    `
  }
}