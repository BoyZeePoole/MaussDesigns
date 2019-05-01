import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customize } from '../models/';
import { EndPoints } from './settings';
import { ConfigurationService } from './config.service';

@Injectable()
export class CustomizeService {
    constructor(private http: HttpClient
                ,private configService: ConfigurationService) { }

    getAll(id: any) {
        if(id !=null && id != undefined){
            let endpoint = this.configService.RootUrl() + EndPoints.productController.getProductsByGroupId;
            return this.http.get<Customize[]>(endpoint +'?id=' + id);
        }
        else {
            let endpoint = this.configService.RootUrl() + EndPoints.productController.getAllProductss;
            return this.http.get<Customize[]>(endpoint);
        }       
    }
    getByGroupId(id) {
        let endpoint = this.configService.RootUrl() + EndPoints.productController.getProductsByGroupId;
        return this.http.get<Customize[]>(endpoint +'?id=' + id);
    }
    getById(id: number) {
        let endpoint = this.configService.RootUrl() + EndPoints.productController.getProductById;
        return this.http.get<Customize[]>(endpoint +'?id=' + id);
    }
    
    save(customize : FormData) {      
        let endpoint = this.configService.RootUrl() + EndPoints.customizeController.save;
        return this.http.post(endpoint, customize);
    }

    update(client: Customize) {
        return this.http.put(EndPoints.productController.update + client.RefId, client);
    }

    delete(id: number) {
        return this.http.delete(EndPoints.productController.delete + id);
    }
}