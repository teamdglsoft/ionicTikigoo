import { Component } from '@angular/core';
import { NavController, ViewController, LoadingController } from 'ionic-angular';
import { SucursalesProvider } from "../../providers/index.services";
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  secciones: any [] = [];

  constructor(public navCtrl: NavController,
    private viewCtrl: ViewController,
    private _sp: SucursalesProvider,
    private loadingCtrl: LoadingController) {
      this.getSecciones();
  }

  getSecciones() {
    const loader = this.loadingCtrl.create({
      content: "Obteniendo menú"
    });
    loader.present();
    this._sp.getSeccionesPorSucursal(resp => {
      loader.dismiss();
      this.secciones = resp;
    },'TIZOC');
  }

  showProductos(seccion: string) {
    // this._sp.getProductoPorSeccion(seccion);
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }

}
