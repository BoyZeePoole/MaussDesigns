import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ColorWheel } from '../models/';
import { EndPoints } from './settings';
import { ConfigurationService } from './config.service';

@Injectable()
export class ColorWheelService {
  constructor(private http: HttpClient
    , private configService: ConfigurationService) { }

  getAll() {
      let endpoint = this.configService.RootUrl() + EndPoints.colorWheelController.getAll;
      return this.http.get<ColorWheel[]>(endpoint);
    
  }

  save(customize: FormData) {
    let endpoint = this.configService.RootUrl() + EndPoints.colorWheelController.save;
    return this.http.post(endpoint, customize);
  }
  delete(id){
    let endpoint = this.configService.RootUrl() + EndPoints.colorWheelController.delete;
    return this.http.post(endpoint + '?id=' + id, null);
  }
}

