export default class Weather {
  constructor(data) {
    this.name = data.name
    this.temp = data.main.temp
  }

  get Template() {
    return `
    <div>${this.temp} in ${this.name}</div>
    
    `
  }
}
// <button id="tempchange" onclick = "this.temperatureConverter()></button>
// <p>Fahrenheit:</p> <span id="outputFahrenheit"></span>

// function temperatureConverter() {
//   valNum = parseFloat(`${this.temp}`);
//   document.getElementById("outputFahrenheit").innerHTML = ((valNum - 273.15) * 1.8) + 32;
// }