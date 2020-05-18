import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, AlertController, ToastController } from 'ionic-angular';
import { SucursalesProvider } from "../../providers/index.services";
@Component({
  selector: 'page-producto',
  templateUrl: 'producto.html',
})
export class ProductoPage {
  seccion: string;
  nombreSeccion: string;
  productos: any [] = [];
  productosPedido: any [] = [];
  constructor(public navCtrl: NavController,
    private toastCtrl: ToastController,
    private sucursalesProvider: SucursalesProvider,
    public navParams: NavParams,
    private viewCtrl: ViewController,
    private alertCtrl: AlertController) {
    this.seccion = navParams.get('nseccion');
    this.nombreSeccion = navParams.get('nombre');
    this.getProductos(this.seccion);
  }

  getProductos(seccion: string) {
    console.log('get productos, seccion: ', seccion);
    this.sucursalesProvider.getProductoPorSeccion(resp => {
      console.log('resproductos: ', resp);
      this.productos = resp;
    }, seccion);
  }

  addProducto(allData: any) {
    console.log(allData);
    let prompt = this.alertCtrl.create({
      title: `AGREGAR ${allData.nombre}`,
      message: "Rellene los campos",
      inputs: [{
        name: 'cantidad',
        placeholder: 'Cantidad',
        type: 'number'
        },
        {
          name: 'observaciones',
          placeholder: 'Observaciones',
          type: 'ion-textarea'
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
          text: 'Agregar',
          handler: data => {
            if(data.cantidad > 0) {
              let totalPedido = data.cantidad * allData.precio;
              let pedido = {
                npedido: null,
                nproducto: allData.nproducto,
                cantidad: Number(data.cantidad),
                nombre: allData.nombre,
                precio: allData.precio,
                total: totalPedido,
                observaciones: data.observaciones
              };
              this.productosPedido.push(pedido);
              console.log('Total pedidos: ', this.productosPedido);
            } else {
              this.showCustomToast('La cantidad debe ser mayor a 0', 3000);
            }
          }
        }
      ]
    });
    prompt.present();
  }

  dismiss() {
    this.viewCtrl.dismiss(this.productosPedido);
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

}
