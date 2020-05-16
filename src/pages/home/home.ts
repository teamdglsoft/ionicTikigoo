import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Device } from '@ionic-native/device';

import { MenuPage }  from "../menu/menu";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  imagenArr: any  = [];
  menuPage = MenuPage;
  //sucursalesPage = SucursalesPage;
  constructor(public navCtrl: NavController,
    private device: Device
  //private _sp: SucursalesProvider
) {
  console.log('Devide id:', this.device.uuid);
    this.imagenArr = [
      {
        'image': '../../assets/imgs/slides/01.jpg'
      },
      {
        'image': '../../assets/imgs/slides/02.jpg'
      }];
  }

}
