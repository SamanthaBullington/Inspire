export default class Quote {
  constructor(data) {
    this.author = data.author;
    this.content = data.content;
  }

  get Template() {
    return /*HTML*/`
    <div class ="content">"${this.content}"</div> <span class ="hide">by ${this.author}</span>
    `
  }
}