import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EndPoints } from './settings';
import { ConfigurationService } from './config.service';

@Injectable()
export class SubscribeService {
    constructor(private http: HttpClient,
                private configService: ConfigurationService) { }
    
    save(sub : FormData) {      
        let endpoint = this.configService.RootUrl() + EndPoints.subscribeController.save;
        return this.http.post(endpoint, sub);
    }
}

