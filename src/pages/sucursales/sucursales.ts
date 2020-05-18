import { Component } from '@angular/core';
import { ToastController, AlertController , ViewController, NavParams, ModalController, LoadingController } from 'ionic-angular';
import { SucursalesProvider } from "../../providers/index.services";
import { SucursalDetallePage, MenuSucursalesPage }  from "../index.paginas";
@Component({
  selector: 'page-sucursales',
  templateUrl: 'sucursales.html',
})
export class SucursalesPage {
  sucursal: string;
  modoPedido: boolean = false;
  idUsuario: number;
  productosPedido: any [] = [];
  cantidadProductos: number = 0;
  montoTotal: number = 0;
  showCarrito: boolean = false;
  pagaCon: number;
  sucursales: any [] = [];
  domicilio: number;
  constructor(public viewCtrl: ViewController,
    private toastCtrl: ToastController,
    public navParams: NavParams,
    private _sp: SucursalesProvider,
    private modalCtr: ModalController,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController
  ) {
    this.modoPedido = navParams.get('modPedido');
    this.idUsuario = navParams.get('idUsuario');
    this.domicilio = navParams.get('domicilio');
    this.getSucursales();
  }
  showMenuSucursal(sucursal) {
    let modal = this.modalCtr.create(MenuSucursalesPage, {sucursal: sucursal, idUsuario: this.idUsuario, domicilio: this.domicilio})
    modal.present();
  }
  dismiss() {
    this.sucursales = [];
    console.log(this.sucursales)
    this.viewCtrl.dismiss();
  }

  getSucursales() {
    const loader = this.loadingCtrl.create({
      content: "Obteniendo sucursales"
    });
    loader.present();
    this._sp.getSucursales(data => {
      loader.dismiss()
      this.sucursales = data;
      console.log(this.sucursales);
    });
  }
  showRadio(monto: number) {
    let alert = this.alertCtrl.create();
    alert.setTitle('Pedido');
    alert.setMessage('Como desea obtener su pedido?');

    alert.addInput({
      type: 'radio',
      label: 'Enviar a domicilio',
      value: '1',
      checked: true
    });
    alert.addInput({
      type: 'radio',
      label: 'Recoger en sucursar',
      value: '0',
      checked: false
    });
    alert.addButton('Cancel');
    alert.addButton({
      text: 'Enviar pedido',
      handler: data => {
        console.log(data);
        let dataOrder = {
          idUsuario: this.idUsuario,
          cantidadProductos: this.cantidadProductos,
          sucursal: this.sucursal,
          importeTotal: this.montoTotal,
          pagaCon: monto ? monto : this.montoTotal,
          aDomicilio: Number(data)
        };
        console.log('Data To new Order: ', dataOrder);
        this._sp.addNewOrder(callbackd => {
          console.log('My result from callback', callbackd);
          for (let i = 0; i < this.productosPedido.length; i++) {
            this.productosPedido[i].npedido = callbackd.idPedido;
            console.log('con nuevo idpedido: ', this.productosPedido[i]);
          }
          this._sp.addProductsOrderToOrder(callback => {
            if(callback){
              this.productosPedido = [];
              this.showCustomToast('El pedido ha sido enviado correctamente', 4000);
              this.viewCtrl.dismiss();
            }
          }, this.productosPedido);
        }, dataOrder);
      }
    });
    alert.present();
  }
  avisoMontoAPagar(allData: any) {
    console.log(allData);
    //let totalAPagar = 0;
    for (let i = 0; i < this.productosPedido.length; i++) {
      console.log(this.productosPedido[i]);
      this.montoTotal += this.productosPedido[i].total;
      this.cantidadProductos += this.productosPedido[i].cantidad;
    }
    console.log('Cantidad de productos: ', this.cantidadProductos);
    console.log('Monto total: ', this.montoTotal);
    let prompt = this.alertCtrl.create({
      title: `AVISO MONTO A PAGAR`,
      message: `Favor de indicarnos si su pago sera exacto, o de lo contrario ingrese el monto a pagar, TOTAL: ${this.montoTotal }`,
      buttons: [
        {
          text: 'Exacto',
          handler: data => {
            this.showRadio(null);
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
            this.showRadio(data.monto);
          }
        }
      ]
    });
    prompt.present();
  }
  showPrompt(allData: any) {
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad SucursalesPage');
  }
  showSucursalInfor(item: any) {
    let modal = this.modalCtr.create(SucursalDetallePage, {sucursal: item} )
    modal.present();
  }
  showMenuProd(sucursal: string) {
    console.log('Sucursal: ', sucursal);
    this.sucursal = sucursal;
    // this._sp.getSeccionesPorSucursal(sucursal);
  }
  showProductos(seccion: any) {
    console.log('Seccion: ', seccion);
    // this._sp.getProductoPorSeccion(seccion);
  }
  addProduct(nProducto: any) {
    console.log(nProducto);
  }
  showCard() {

    if(this.productosPedido.length === 0) {
      this.showCustomToast('Aun no ha agregado nada a su pedido', 1000);
    } else {
      this.showCarrito = true;
    }
  }
  hideCar() {
    this.showCarrito = false;
  }
  deleteElementToCard(position: any){
    this.productosPedido.splice(position,1);
    if(this.productosPedido.length === 0) {
      this.showCarrito = false;
      console.log('ponemos carrito en falso');
    }

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
