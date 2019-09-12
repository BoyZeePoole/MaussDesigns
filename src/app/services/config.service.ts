import {Injectable} from '@angular/core';

@Injectable()
export class ConfigurationService {
 rootUrl: string = 'http://localhost:60076/';
  //rootUrl: string = 'https://api.mauss.co.za/';

  public RootUrl(): string {
    return this.rootUrl;
  }
}

