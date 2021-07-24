import { ProxyState } from "../AppState.js";
import { quoteService } from "../Services/QuoteService.js";

function _drawQuote() {
  const quoteTemplate = ProxyState.currentQuote.Template
  document.getElementById('quote').innerHTML = quoteTemplate
}

export default class QuoteController {
  constructor() {
    ProxyState.on('currentQuote', _drawQuote);
    this.getNewQuote()
  }
  async getNewQuote() {
    try {
      await quoteService.getNewQuote()
    } catch (error) {
      console.error(error)
    }
  }

}
