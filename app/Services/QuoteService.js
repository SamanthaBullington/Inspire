import { ProxyState } from "../AppState.js";
import Quote from "../Models/Quote.js";
import { sandbox } from '../Services/AxiosService.js'

class QuoteService {
  constructor() {
    this.getNewQuote()
  }

  async getNewQuote() {
    try {
      const res = await sandbox.get('quotes')
      console.log(res.data)
      ProxyState.currentQuote = new Quote(res.data)
      console.log('proxystateQuote', ProxyState.currentQuote)
    } catch (error) {
      console.log(error)
    }
  }
}
export const quoteService = new QuoteService();