import { Component } from '@angular/core';
import { ViewController, NavController, NavParams, ModalController, ToastController } from 'ionic-angular';
import { SucursalesProvider } from "../../providers/index.services";
import { ProductoPage, AdomicilioPage }  from "../index.paginas";
@Component({
  selector: 'page-menu-sucursales',
  templateUrl: 'menu-sucursales.html',
})
export class MenuSucursalesPage {
  idUsuario: number;
  sucursal: string;
  secciones: any [] = [];
  allPedidos: any [] = [];
  domicilio: number;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private sucursalesProvider: SucursalesProvider,
    private modalCtrl: ModalController,
    private viewsCtrl: ViewController,
    private toastCtrl: ToastController
) {
    this.idUsuario = navParams.get('idUsuario');
    this.sucursal = navParams.get('sucursal');
    this.domicilio = navParams.get('domicilio');
    this.sucursalesProvider.getSeccionesPorSucursal(resp => {
      this.secciones = resp;
      console.log(this.secciones);
    }, navParams.get('sucursal'));
  }
  showCustomToast(mensaje: string, tiempo: number) {
  let toast = this.toastCtrl.create({
    message: mensaje,
    duration: tiempo,
    position: 'top'
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();
}
  showPedido() {
    if(this.allPedidos.length <= 0) {
      this.showCustomToast('Aun no ha agregado ningun producto a su carrito', 4500);
    }else {
    console.log('Todos los pedidos => ', this.allPedidos);
    let modal = this.modalCtrl.create(AdomicilioPage, {pedido: this.allPedidos, idUsuario: this.idUsuario, sucursal: this.sucursal, domicilio: this.domicilio});
    modal.present();
    modal.onDidDismiss(result => {
      if(result) {
        this.allPedidos = [];
      }
    });
  }
  }
  showSubProductos(nseccion, nombre) {
    let modal = this.modalCtrl.create(ProductoPage, {nseccion, nombre});
    modal.present();
    modal.onDidDismiss(resp => {
      resp.forEach(element => {
        this.allPedidos.push(element);
      });
    });
  }

  dismiss() {
    this.viewsCtrl.dismiss();
  }

}
