import { Component } from '@angular/core';
import { Geolocation,Position } from '@capacitor/geolocation';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
position:Position=null;
  constructor() {}
async getCurrentPosition(){
  
    const coordinates = await Geolocation.getCurrentPosition();
   this.position=coordinates; 
   
  };
}

