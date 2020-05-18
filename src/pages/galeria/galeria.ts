import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { GaleriaProvider } from "../../providers/index.services"
@Component({
  selector: 'page-galeria',
  templateUrl: 'galeria.html',
})
export class GaleriaPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private _gp: GaleriaProvider,
  private viewCtrl: ViewController
  ) {
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }

}
