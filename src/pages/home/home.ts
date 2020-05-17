import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Device } from '@ionic-native/device';

import { MenuPage, SucursalesPage, GaleriaPage }  from "../index.paginas";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  imagenArr: any  = [];
  //sucursalesPage = SucursalesPage;
  constructor(public navCtrl: NavController,
    private modalCtrl: ModalController,
    private device: Device
  //private _sp: SucursalesProvider
) {
  console.log('Devide id:', this.device.uuid);
    this.imagenArr = [
      {
        'image': '../../assets/imgs/slides/promociones/promo1.jpg'
      },
      {
        'image': '../../assets/imgs/slides/promociones/promo2.jpg'
      },
      {
        'image': '../../assets/imgs/slides/promociones/promo3.jpg'
      },
      {
        'image': '../../assets/imgs/slides/promociones/promo4.jpg'
      }
    ];
  }
  showGaleria() {
    let modal = this.modalCtrl.create(GaleriaPage)
    modal.present();
  }
  showMenu() {
    let modal = this.modalCtrl.create(MenuPage)
    modal.present();
  }
  showSucursales() {
    let modal = this.modalCtrl.create(SucursalesPage)
    modal.present();
  }

}
