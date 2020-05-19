import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Device } from '@ionic-native/device';

import { MenuPage, SucursalesPage, GaleriaPage, EventosPage, OrdenarPage }  from "../index.paginas";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  imagenArr: any  = [];
  //sucursalesPage = SucursalesPage;
  logo: string = '../../assets/imgs/LOGOBG.png';
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
  ordenar() {
    let modal = this.modalCtrl.create(OrdenarPage)
    modal.present();
  }
  showImg() {
    let modal = this.modalCtrl.create(EventosPage)
    modal.present();
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
