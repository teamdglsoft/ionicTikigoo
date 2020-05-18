import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, AlertController, ToastController } from 'ionic-angular';
import { SucursalesProvider } from "../../providers/index.services";
@Component({
  selector: 'page-adomicilio',
  templateUrl: 'adomicilio.html',
})
export class AdomicilioPage {
  pedido: any [] = [];
  totalPago: number = 0;
  totalProductos: number = 0;
  idUsuario: number;
  sucursal: string;
  domicilio: number;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl: ViewController,
    private alertCtrl: AlertController,
    private sucursalesProvider: SucursalesProvider,
    private toastCtrl: ToastController
  ) {
    this.pedido = navParams.get('pedido');
    this.idUsuario = navParams.get('idUsuario');
    this.sucursal = navParams.get('sucursal');
    this.domicilio = navParams.get('domicilio');
    navParams.get('pedido').forEach(element => {
      this.totalPago += (element.precio * element.cantidad);
      this.totalProductos += element.cantidad;
    });
  }
  quitarProducto(position: any) {
    let resta = this.pedido[position].cantidad * this.pedido[position].precio;
    this.totalPago = this.totalPago - resta;
    this.totalProductos -= this.pedido[position].cantidad;
    this.pedido.splice(position,1);
  }
  avisoMontoAPagar() {
    let prompt = this.alertCtrl.create({
      title: `AVISO MONTO A PAGAR`,
      message: `Favor de indicarnos si su pago sera exacto, o de lo contrario ingrese el monto a pagar, TOTAL: ${this.totalPago }`,
      buttons: [
        {
          text: 'Exacto',
          handler: data => {
            this.enviarPedido(null);
          }
        },
        {
          text: 'Ingresar monto',
          handler: data => {
            this.ingresarMonto();
          }
        }
      ]
    });
    prompt.present();
  }
  ingresarMonto() {
    let prompt = this.alertCtrl.create({
      title: `AGRESE MONTO`,
      message: "Rellene los campos",
      inputs: [{
        name: 'monto',
        placeholder: 'Monto',
        type: 'number'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Continuar',
          handler: data => {
            this.enviarPedido(data.monto);
          }
        }
      ]
    });
    prompt.present();
  }
  enviarPedido(monto: any) {
    console.log(monto);
    let dataOrder = {
      idUsuario: this.idUsuario,
      cantidadProductos: this.totalProductos,
      sucursal: this.sucursal,
      importeTotal: this.totalPago,
      pagaCon: monto ? monto : this.totalPago,
      aDomicilio: this.domicilio
    };
    console.log('Data To new Order: ', dataOrder);
    this.sucursalesProvider.addNewOrder(callbackd => {
      console.log('My result from callback', callbackd);
      for (let i = 0; i < this.pedido.length; i++) {
        this.pedido[i].npedido = callbackd.idPedido;
        console.log('con nuevo idpedido: ', this.pedido[i]);
      }
      this.sucursalesProvider.addProductsOrderToOrder(callback => {
        if(callback){
          this.pedido = [];
          this.showCustomToast('El pedido ha sido enviado correctamente', 4000);
          this.viewCtrl.dismiss({pedidosSend: true});
        }
      }, this.pedido);
    }, dataOrder);
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
  dismiss() {
    this.pedido = [];
    console.log('Saliendo de pedido: ', this.pedido);
    this.viewCtrl.dismiss();
  }

}
