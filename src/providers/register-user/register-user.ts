import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url_servicios } from '../../config/url.services';
// import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
@Injectable()
export class RegisterUserProvider {
  codeDeviceId: any;
  constructor(public http: HttpClient,
  // private uniqueDeviceID: UniqueDeviceID
) {
     // this.getCodeToDeviceId();
  //    this.codeDeviceId = this.uniqueDeviceID.get()
  // .then((uuid: any) => console.log(uuid))
  // .catch((error: any) => console.log(error));
  }

  getCodeToDeviceId(callback) {
    let url = url_servicios + 'getDevice/';
    this.http.get(url+'123123')
    .map(data => data)
    .subscribe( (data: any) => {
      console.log(data);
      callback(data);
    } )
  }
  agregaId() {
    console.log('hola');
  }




  registerNewDeviceId(callback) {
    let url = url_servicios + 'addDeviceId/';
    this.http.post(url+'123123', null)
    .map(data => data)
    .subscribe( (data: any) => {
      console.log(data);
      callback(data.ok);
    } )
  }

  updateEdoToEstado(callback, codeSms: string) {
    let url = url_servicios + 'validateCodeToDeviceId/';
    this.http.post(url+'123123/'+codeSms, null)
    .map(data => data)
    .subscribe( (data: any) => {
      console.log(data);
      callback(data);
    } )
  }

  insertNewUser(callback, allDataToService: any) {
    let url = url_servicios + 'registerUserInfo/';
    this.http.post(url, allDataToService)
    .map(data => data)
    .subscribe( (data: any) => {
      callback(data);
    } )
  }
}
