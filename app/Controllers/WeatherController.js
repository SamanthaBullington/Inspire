import { ProxyState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js";

function _drawWeather() {
  const weatherTemplate = ProxyState.currentWeather.Template
  document.getElementById('weather').innerHTML = weatherTemplate
}

export default class WeatherController {
  constructor() {
    ProxyState.on('currentWeather', _drawWeather);
    this.getNewWeather()
  }
  async getNewWeather() {
    try {
      await weatherService.getNewWeather()
    } catch (error) {
      console.error(error)
    }
  }
}