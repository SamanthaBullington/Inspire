import { ProxyState } from "../AppState.js";
import Image from "../Models/Image.js";
import { sandbox } from '../Services/AxiosService.js'

class ImageService {
  constructor() {
    this.getNewImage()
  }

  async getNewImage() {
    try {
      const res = await sandbox.get('images')
      console.log(res)
      ProxyState.currentImage = new Image(res.data)
    } catch (error) {
      console.log(error)
    }
  }
}

export const imageService = new ImageService();