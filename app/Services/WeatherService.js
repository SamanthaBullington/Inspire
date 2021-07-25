import { ProxyState } from "../AppState.js";
import Weather from "../Models/Weather.js";
import { sandbox } from '../Services/AxiosService.js';

class WeatherService {
  constructor() {
    this.getNewWeather()
  }

  async getNewWeather() {
    try {
      const res = await sandbox.get('weather')
      console.log(res.data)
      ProxyState.currentWeather = new Weather(res.data)
      console.log('proxystateWeather', ProxyState.currentWeather)
    } catch (error) {
      console.log(error)
    }
  }
}
export const weatherService = new WeatherService();