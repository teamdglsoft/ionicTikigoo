import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//import { SucursalesProvider } from "../../providers/sucursales/sucursales";
import { MenuPage }  from "../menu/menu";
//import { SucursalesPage }  from "../sucursales/sucursales";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  imagenArr: any  = [];
  menuPage = MenuPage;
  //sucursalesPage = SucursalesPage;
  constructor(public navCtrl: NavController
  //private _sp: SucursalesProvider
) {
    this.imagenArr = [
      {
        'image': '../../assets/imgs/slides/01.jpg'
      },
      {
        'image': '../../assets/imgs/slides/02.jpg'
      }];
  }

}
