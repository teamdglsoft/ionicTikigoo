import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
@Component({
  selector: 'page-eventos',
  templateUrl: 'eventos.html',
})
export class EventosPage {
  imagenArr: any  = [];
  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    this.imagenArr = [
      {
        'image': '../../assets/imgs/eventos/EVENTO1.jpg'
      },
      {
        'image': '../../assets/imgs/eventos/EVENTO2.jpg'
      },
      {
        'image': '../../assets/imgs/eventos/EVENTO3.jpg'
      },
      {
        'image': '../../assets/imgs/eventos/EVENTO4.jpg'
      }
    ];
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }

}
