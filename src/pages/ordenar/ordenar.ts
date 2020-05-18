import { Component } from '@angular/core';
import { NavController, ViewController, ModalController, LoadingController } from 'ionic-angular';
import { EventosPage, UserRegisterPage, SucursalesPage }  from "../index.paginas";
import { DeviceProvider } from "../../providers/index.services";
@Component({
  selector: 'page-ordenar',
  templateUrl: 'ordenar.html',
})
export class OrdenarPage {
  idUsuario: number;
  statusCode: number;

  constructor(public navCtrl: NavController,
  private viewCtrl: ViewController,
  private _deviceProvider: DeviceProvider,
  private loadingCtrl: LoadingController,
  private modalCtrl: ModalController) {
    this.getStatusCode();
  }

  getStatusCode () {
    const loader = this.loadingCtrl.create({
      content: "Obteniendo información"
    });
    loader.present();
    this._deviceProvider.getCodeToDeviceId(response => {
      console.log('getStateCode: '), response;
      console.log('Estado: ', response.edo);
      this.idUsuario = response.idUsuario;
      if(response.edo !== 3) {
        let modal = this.modalCtrl.create(UserRegisterPage, {estado: response.edo})
        this.statusCode = response.edo;
        modal.present();
        modal.onDidDismiss(parametro => {
          if(parametro) {
            this.statusCode = parametro.newStatus;
          }
        });
      } else {
        this.statusCode = response.edo;
        console.log('Estatus code: ', response.edo);
        console.log('id usuario: ', this.idUsuario);
      }
      loader.dismiss();
    });
  }
  showSucursalesModPedido(domicilio: number) {
    let modal = this.modalCtrl.create(SucursalesPage, {modPedido: true, idUsuario: this.idUsuario, domicilio});
    modal.present();
  }
  showEventos() {
    let modal = this.modalCtrl.create(EventosPage)
    modal.present();
  }

showModalRegister() {
  let modal = this.modalCtrl.create(UserRegisterPage, {estado: this.statusCode});
  modal.present();
}

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
