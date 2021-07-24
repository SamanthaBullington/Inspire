import ImageController from "./Controllers/ImageController.js";
import QuoteController from "./Controllers/QuoteController.js";
// import WeatherController from "./Controllers/WeatherController.js";
// import ToDoController from "./Controllers/ToDoController.js";

class App {
  imageController = new ImageController();

  quoteController = new QuoteController();

  // weatherController = new WeatherController();
}

window["app"] = new App();
