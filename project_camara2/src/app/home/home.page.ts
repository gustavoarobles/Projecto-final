import { Component } from '@angular/core';
import { Camera, CameraResultType , CameraSource } from '@capacitor/camera';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
photos:any[]=[];
  constructor() {}
  async takePicture(){
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source:CameraSource.Camera

    });
    this.photos.unshift(image.webPath);
  }

}
