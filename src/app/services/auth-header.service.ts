import {Injectable} from '@angular/core';
import {HttpHeaders} from '@angular/common/http';


@Injectable()
export class AuthHeaderService {

  public getHeaders() : HttpHeaders {
    let authHeaders = new HttpHeaders();
    let token = localStorage.getItem('id_token');
    authHeaders.set('Content-Type', 'application/x-www-form-urlencoded');
    authHeaders.set('Accept', 'application/json');
    if (token) {
      authHeaders.set('Authorization', 'Bearer ' + token)
    }
    return authHeaders;
  }
}