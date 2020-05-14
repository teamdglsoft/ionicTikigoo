import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url_servicios } from '../../config/url.services';
import { Device } from '@ionic-native/device';
@Injectable()
export class RegisterUserProvider {
  codeDeviceId: any;
  constructor(public http: HttpClient,
  private device: Device
) {
  
  }

  getCodeToDeviceId(callback) {
    let url = url_servicios + `getDevice/${this.device.uuid}`;
    this.http.get(url)
    .map(data => data)
    .subscribe( (data: any) => {
      console.log(data);
      callback(data);
    } )
  }
  agregaId() {
    console.log('hola');
  }




  registerNewDeviceId(callback, celular: number) {
    let url = url_servicios + `addDeviceId/${this.device.uuid}/${celular}`;
    this.http.post(url, null)
    .map(data => data)
    .subscribe( (data: any) => {
      console.log(data);
      callback(data.ok);
    } )
  }

  updateEdoToEstado(callback, codeSms: string) {
    let url = url_servicios + `validateCodeToDeviceId/${this.device.uuid}/${codeSms}`;
    this.http.post(url, null)
    .map(data => data)
    .subscribe( (data: any) => {
      console.log(data);
      callback(data);
    } )
  }

  insertNewUser(callback, allDataToService: any) {
    let url = url_servicios + 'registerUserInfo';
    this.http.post(url, allDataToService)
    .map(data => data)
    .subscribe( (data: any) => {
      callback(data);
    } )
  }
}
