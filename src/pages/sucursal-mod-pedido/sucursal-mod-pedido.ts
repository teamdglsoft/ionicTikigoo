import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
@Component({
  selector: 'page-sucursal-mod-pedido',
  templateUrl: 'sucursal-mod-pedido.html',
})
export class SucursalModPedidoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SucursalModPedidoPage');
  }

}
