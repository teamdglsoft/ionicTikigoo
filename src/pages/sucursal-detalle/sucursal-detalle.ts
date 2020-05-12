import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
@Component({
  selector: 'page-sucursal-detalle',
  templateUrl: 'sucursal-detalle.html',
})
export class SucursalDetallePage {
  sucursalDetails: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController) {
      this.sucursalDetails = navParams.get("sucursal");
      console.log(this.sucursalDetails);

  }

  cerrarModal() {
    this.viewCtrl.dismiss();
  }

}
