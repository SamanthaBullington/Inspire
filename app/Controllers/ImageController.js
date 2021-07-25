import { ProxyState } from "../AppState.js";
import { imageService } from "../Services/ImageService.js";

function _drawImage() {
  document.body.style.backgroundImage = `url('${ProxyState.currentImage.imgUrl}')`;
}

export default class ImageController {
  constructor() {
    ProxyState.on('currentImage', _drawImage);
    this.getNewImage()
  }
  async getNewImage() {
    try {
      await imageService.getNewImage()
    } catch (error) {
      console.error(error)
    }
  }
}