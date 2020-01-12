import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customize } from '../models/';
import { EndPoints } from './settings';
import { ConfigurationService } from './config.service';

@Injectable()
export class OrderService {
    constructor(private http: HttpClient
        , private configService: ConfigurationService) { }


    getByUserId(id: number) {
        let endpoint = this.configService.RootUrl() + EndPoints.orderController.getByUserId;
        return this.http.get(endpoint + '?userId=' + id);
    }

    save(customize: FormData) {
        let endpoint = this.configService.RootUrl() + EndPoints.orderController.save;
        return this.http.post(endpoint, customize);
    }

    update(client: Customize) {
        return this.http.put(EndPoints.productController.update + client.RefId, client);
    }

    delete(id: number) {
        return this.http.delete(EndPoints.productController.delete + id);
    }
}