import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EndPoints } from './settings';
import { ConfigurationService } from './config.service';

@Injectable()
export class AddressService {

  constructor(private http: HttpClient
    , private configService: ConfigurationService) { }


  getAll(id: any) {
    id = id|0;
    let endpoint = this.configService.RootUrl() + EndPoints.addressController.getAddressById;
    return this.http.get(endpoint + '?userId=' + id);
  }
  save(address: FormData) {
    let endpoint = this.configService.RootUrl() + EndPoints.addressController.save;
    return this.http.post(endpoint, address);
  }
}