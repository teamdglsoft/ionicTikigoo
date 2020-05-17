import { Component } from '@angular/core';
import { NavController, ViewController, ModalController } from 'ionic-angular';
import { EventosPage }  from "../index.paginas";
@Component({
  selector: 'page-ordenar',
  templateUrl: 'ordenar.html',
})
export class OrdenarPage {

  constructor(public navCtrl: NavController,
  private viewCtrl: ViewController,
private modalCtrl: ModalController) {
  }
  showEventos() {
    let modal = this.modalCtrl.create(EventosPage)
    modal.present();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
