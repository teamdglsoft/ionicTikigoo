import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Device } from '@ionic-native/device';
import { url_servicios } from '../../config/url.services';
@Injectable()
export class DeviceProvider {

  constructor(
    public http: HttpClient,
    private device: Device
  ) {
  }

  getCodeToDeviceId(callback) {
    let url = url_servicios + `getDevice/${this.device.uuid}`;
    this.http.get(url)
    .map(data => data)
    .subscribe( (data: any) => {
      console.log('getCodeToDeviceId -> data: ', data);
      callback(data);
    } );
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

}
