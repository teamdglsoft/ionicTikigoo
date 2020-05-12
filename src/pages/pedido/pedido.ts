import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { RegisterUserProvider } from "../../providers/index.services";
import { UserRegisterPage, SucursalesPage }  from "../index.paginas";
@Component({
  selector: 'page-pedido',
  templateUrl: 'pedido.html',
})
export class PedidoPage {

  statusCode: number;
  idUsuario: number;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private _rup: RegisterUserProvider,
    private modalCtr: ModalController
  ) {
  }

  ionViewDidLoad() {
    this.showModalRegister();
  }

  showModalRegister() {
    this._rup.getCodeToDeviceId(response => {
      console.log('all response: ', response);
      this.idUsuario = response.idUsuario;
      if(response.edo === 0 || response.edo === 1 || response.edo === 2) {
        let modal = this.modalCtr.create(UserRegisterPage, {estado: response.edo})
        this.statusCode = response.edo;
        modal.present();
      } else {
        this.statusCode = response.edo;
        console.log('Estatus code: ', response.edo);
        console.log('id usuario: ', this.idUsuario);
      }
    });
  }

  pedidoAdomicilio() {
    let modal = this.modalCtr.create(SucursalesPage, {modoPedido: true, idUsuario: this.idUsuario})
    modal.present();
  }

}
