import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { RegisterUserProvider } from "../../providers/index.services";
import { UserRegisterPage, SucursalesPage }  from "../index.paginas";
import { Device } from '@ionic-native/device';
@Component({
  selector: 'page-pedido',
  templateUrl: 'pedido.html',
})
export class PedidoPage {

  statusCode: number;
  idUsuario: number;
  idDispositivo: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private _rup: RegisterUserProvider,
    private modalCtr: ModalController,
    private device: Device
  ) {
    this.idDispositivo = this.device.uuid;
    console.log('IDD: ', this.device.uuid);
  }

  showModalRegister() {
    console.log('Hi');
    let modal = this.modalCtr.create(UserRegisterPage);
    modal.present();
  }

  pedidoAdomicilio() {
    let modal = this.modalCtr.create(SucursalesPage, {modoPedido: true, idUsuario: this.idUsuario});
    modal.present();
  }

}
