export default class Weather {
  constructor(data) {
    this.name = data.name
    this.temp = data.main.temp
    this.celsius = data.main.temp - 273.15
    this.fahrenheit = data.main.temp * (9 / 5) - 459.67
    this.isfahrenheit = true
  }
  get Template() {
    return `
    <div>${this.temp} in ${this.name}</div>
    `
  }
}

//content editable

// <button id="tempchange" onclick = "this.temperatureConverter()></button>
// <p>Fahrenheit:</p> <span id="outputFahrenheit"></span>

// function temperatureConverter() {
//   valNum = parseFloat(`${this.temp}`);
//   document.getElementById("outputFahrenheit").innerHTML = ((valNum - 273.15) * 1.8) + 32;
// }