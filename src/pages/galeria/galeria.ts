import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { GaleriaProvider } from "../../providers/index.services"
@Component({
  selector: 'page-galeria',
  templateUrl: 'galeria.html',
})
export class GaleriaPage {
  galeria: any [] = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private _gp: GaleriaProvider,
  private viewCtrl: ViewController
  ) {
    this.galeria = [
      {
        'image': '../../assets/imgs/galeria/GALERIA1.JPG'
      },
      {
        'image': '../../assets/imgs/galeria/GALERIA2.JPG'
      },
      {
        'image': '../../assets/imgs/galeria/GALERIA3.JPG'
      },
      {
        'image': '../../assets/imgs/galeria/GALERIA4.JPG'
      },
      {
        'image': '../../assets/imgs/galeria/GALERIA5.JPG'
      },
      {
        'image': '../../assets/imgs/galeria/GALERIA6.JPG'
      },
      {
        'image': '../../assets/imgs/galeria/GALERIA7.JPG'
      },
      {
        'image': '../../assets/imgs/galeria/GALERIA8.JPG'
      },
      {
        'image': '../../assets/imgs/galeria/GALERIA9.JPG'
      }
    ];
    // this._gp.getFotosGaleria(imagenes => {
    //   this.imagenes = imagenes;
    // });
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }

}
