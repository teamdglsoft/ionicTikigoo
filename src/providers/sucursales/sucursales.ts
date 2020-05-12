import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url_servicios } from '../../config/url.services';
import "rxjs/add/operator/map";
@Injectable()
export class SucursalesProvider {
  sucursales: any [] = [];
  secciones: any [] = [];
  productos: any [] = [];

  constructor(public http: HttpClient) {
    this.getSucursales();
    //console.log('Hello SucursalesProvider Provider');
  }

  addNewOrder(callback, dataFromWs: any) {
    let url = url_servicios + 'addNewOrder';
    this.http.post(url, dataFromWs)
    .map(data => data)
    .subscribe( (data: any) => {
      if(data.error) {

      } else {
        callback(data);
        console.log('se creo la orden correctamente');
        console.log(data.idPedido);
      }
    } );
  }

  addProductsOrderToOrder(callback, pedidos: any) {
    let url = url_servicios + 'addProductToOrder';
    for (let i = 0; i < pedidos.length; i++) {
      this.http.post(url, pedidos[i])
      .subscribe( (data: any) => {
        console.log(data);
        if(data.error) {

        } else {
          console.log(data);
        }
      } );
    }
    callback(true);
  }

  getSucursales () {
    let url = url_servicios + 'sucursales';
    this.http.get(url)
    .subscribe( (data: any) => {
      console.log(data);
      if(data.error) {

      } else {
        this.sucursales.push( ...data.sucursales );
        console.log(this.sucursales);

      }
    } );
  }
  getSeccionesPorSucursal(sucursal: string) {
    this.secciones = [];
    let url = url_servicios + 'secciones/' + sucursal;
    this.http.get(url)
    .subscribe( (data: any) => {
      if(data.error) {

      } else {
        this.secciones.push( ...data.secciones );
        console.log('seecciones Ws', this.secciones);
      }
    } );
  }

  getProductoPorSeccion(seccion: any) {
    this.productos = [];
    let url = url_servicios + 'getProductosBySeccion/' + seccion;
    this.http.get(url)
    .subscribe( (data: any) => {
      if(data.error) {

      } else {
        this.productos.push( ...data.productos );
        console.log('productos Ws', this.productos);
      }
    } );
  }

}
