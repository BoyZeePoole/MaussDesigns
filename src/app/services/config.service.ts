import {Injectable} from '@angular/core';
import { Helper } from '../services/helper';
@Injectable()
export class ConfigurationService {
  rootUrl: string = Helper.apiServerUrl();  //'http://localhost:60076/';
  //rootUrl: string = 'https://api.mauss.co.za/';

  public RootUrl(): string {
    return this.rootUrl;
  }
}

