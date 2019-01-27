import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClientProfile } from '../models/clientprofile';
import { EndPoints } from './settings';
import { ConfigurationService } from './config.service';

@Injectable()
export class FormService {
    constructor(private http: HttpClient
                ,private configService: ConfigurationService) { }

    GetFormByFormName(formName: string) {
        let endpoint = this.configService.RootUrl() + EndPoints.formController.getForm + "?formName=" + formName;
        return this.http.get<ClientProfile[]>(endpoint);
    }
}