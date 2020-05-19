import { Component } from '@angular/core';
import { ViewController, NavParams, ToastController } from 'ionic-angular';
import {RegisterUserProvider, DeviceProvider}  from "../../providers/index.services";
import { Device } from '@ionic-native/device';
@Component({
  selector: 'page-user-register',
  templateUrl: 'user-register.html',
})
export class UserRegisterPage {

  estado: number;
  celular: string = '';
  codigoSMS: string = '';

  //ALL DATA TO REGISTER USER
  nombre: string = '';
  calle: string = '';
  colonia: string = '';
  ciudad: string = '';
  estadoU: string = '';
  cp: string = '';
  telefono: number = null;
  correo: string = '';
  idDispositivo: any;

  constructor(public viewCtrl: ViewController,
              public navParams: NavParams,
              private toastCtrl: ToastController,
              private _urp: RegisterUserProvider,
              private device: Device,
              private _deviceProvider: DeviceProvider,
            ) {

      this.estado = navParams.get("estado");
      this.idDispositivo = this.device.uuid;
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
  addNewDeviceAndCode() {
    this._deviceProvider.registerNewDeviceId((response => {
      if(response) {
        this.showCustomToast('Se ha registrado su dispositivo correctamente, en breve resicibira un sms para continuar con su registro.', 4500);
        this.estado = 1;
      }
    }), Number(this.celular));
  }

  updateStateCodeToDevineId() {
    this._deviceProvider.updateEdoToEstado((response => {
      if(response.ok) {
        this.showCustomToast('Codigo correcto, ahora puede terminar de completar su registro', 4500);
        this.estado = 2;
      } else {
        this.showCustomToast('El codigo ingresado es incorrecto, verifiquelo e intetelo nuevamente', 4500);
      }
    }), this.codigoSMS);
  }
  addUserInfo() {
    let dataToWs = {
      nombre: this.nombre,
      calle: this.calle,
      colonia: this.colonia,
      ciudad: this.ciudad,
      estado: this.estadoU,
      cp: this.cp,
      telefono: this.telefono,
      correo: this.correo,
      nEquipo: this.idDispositivo,
      edo: 1
    }
    this._urp.insertNewUser((response => {
      if(response.ok) {
        this.estado = 3;
        this.showCustomToast('El usuario se ha creado correctamente', 4500);
        this.viewCtrl.dismiss({newStatus: 3});
      }
      console.log(response);
    }), dataToWs);
  }
  sendCodeSms() {
    this.estado = 1;
  }
  backToSendSms() {
    this.estado = 0;
  }
  reSendSendSms() {

  }

  showCustomToast(mensaje: string, time: number) {
  let toast = this.toastCtrl.create({
    message: mensaje,
    duration: time,
    position: 'top'
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();
}

}
