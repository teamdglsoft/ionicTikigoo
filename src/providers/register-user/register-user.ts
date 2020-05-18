import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url_servicios } from '../../config/url.services';

@Injectable()
export class RegisterUserProvider {
  codeDeviceId: any;
  constructor(public http: HttpClient) {
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
