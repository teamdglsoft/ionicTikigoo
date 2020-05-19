import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url_servicios } from '../../config/url.services';
@Injectable()
export class GaleriaProvider {
  imagenes: any [] = [];

  constructor(public http: HttpClient) {
  }

  getFotosGaleria (callback) {
    let url = url_servicios + 'getImagenes';
    this.http.get(url)
    .subscribe( (data: any) => {
      console.log(data);
      if(data.error) {

      } else {
        this.imagenes.push( ...data.imagenes );
        console.log(this.imagenes);
        callback(this.imagenes);
      }
    } );

  }

}
