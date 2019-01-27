import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClientProfile } from '../models/clientprofile';
import { EndPoints } from './settings';
import { ConfigurationService } from './config.service';

@Injectable()
export class EntityService {
    constructor(private http: HttpClient
                ,private configService: ConfigurationService) { }

    GetEntityByPageName(pageName: string) {
        let endpoint = this.configService.RootUrl() + EndPoints.entityController.getEntityByPageName + "?pageName=" + pageName;
        return this.http.get<ClientProfile[]>(endpoint);
    }
}