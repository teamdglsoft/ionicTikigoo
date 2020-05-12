import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GaleriaProvider } from "../../providers/galeria/galeria"
@Component({
  selector: 'page-galeria',
  templateUrl: 'galeria.html',
})
export class GaleriaPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private _gp: GaleriaProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GaleriaPage');
  }

}
