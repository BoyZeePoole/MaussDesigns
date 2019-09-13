import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/';
import { EndPoints } from './settings';
import { ConfigurationService } from './config.service';


@Injectable()
export class WishlistService {
  constructor(private http: HttpClient
    , private configService: ConfigurationService) { }

  getAll(userRefId: any) {
    if (userRefId != null && userRefId != undefined) {
      let endpoint = this.configService.RootUrl() + EndPoints.wishlistController.getAll;
      return this.http.get<Product[]>(endpoint + '?userRefId=' + userRefId);
    }
  }
  add(userRefId: any, productRefId: any){
      let endpoint = this.configService.RootUrl() + EndPoints.wishlistController.add;
      return this.http.post(endpoint + '?userRefId=' + userRefId + '&productRefId=' + productRefId, null);
  }
  delete(userRefId: any, productRefId: any){
    let endpoint = this.configService.RootUrl() + EndPoints.wishlistController.delete;
    return this.http.post(endpoint + '?userRefId=' + userRefId + '&productRefId=' + productRefId, null);
  }

}