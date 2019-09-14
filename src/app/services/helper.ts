import { environment } from '../../environments/environment';

export class Helper {

  static apiServerUrl() {
    return environment.apiServer;
  }
}
