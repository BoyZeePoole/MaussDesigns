import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClientProfile } from '../models/clientprofile';
import { EndPoints } from './settings';
import { ConfigurationService } from './config.service';

@Injectable()
export class ClientProfileService {
    constructor(private http: HttpClient
                ,private configService: ConfigurationService) { }

    getAll() {
        let endpoint = this.configService.RootUrl() + EndPoints.clientProfileController.getAllClients;
        return this.http.get<ClientProfile[]>(endpoint);
    }

    getById(id: number) {
        return this.http.get(EndPoints.clientProfileController.getClientById + id);
    }

    save(client: ClientProfile) {
        let endpoint = this.configService.RootUrl() + EndPoints.clientProfileController.save;

        return this.http.post(endpoint, client);
    }

    update(client: ClientProfile) {
        return this.http.put(EndPoints.clientProfileController.update + client.id, client);
    }

    delete(id: number) {
        return this.http.delete(EndPoints.userController.delete + id);
    }
}