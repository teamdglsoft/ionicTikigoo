import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SucursalesProvider } from "../../providers/index.services";
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private _sp: SucursalesProvider,) {
    this._sp.getSeccionesPorSucursal('TIZOC');
  }

  showProductos(seccion: string) {
    this._sp.getProductoPorSeccion(seccion);
  }

}
