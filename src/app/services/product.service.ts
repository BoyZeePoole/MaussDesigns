import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/';
import { EndPoints } from './settings';
import { ConfigurationService } from './config.service';

@Injectable()
export class ProductService {
    constructor(private http: HttpClient
                ,private configService: ConfigurationService) { }
    root: string = this.configService.RootUrl();
    getAll(id: any) {
        if(id !=null && id != undefined){
            let endpoint = this.root + EndPoints.productController.getProductsByGroupId;
            return this.http.get(endpoint +'?id=' + id);
        }
        else {
            let endpoint = this.configService.RootUrl() + EndPoints.productController.getAllProductss;
            return this.http.get(endpoint);
        }       
    }
    getByGroupId(id) {
        let endpoint = this.configService.RootUrl() + EndPoints.productController.getProductsByGroupId;
        return this.http.get(endpoint +'?id=' + id);
    }
    getById(id: number) {
        let endpoint = this.configService.RootUrl() + EndPoints.productController.getProductById;
        return this.http.get(endpoint +'?id=' + id);
    }
    getByTag(tag: string) {
        return this.http.get(EndPoints.productController.getProductByTag + tag);
    }

    save(prod : FormData) {      
        let endpoint = this.configService.RootUrl() + EndPoints.productController.save;
        return this.http.post(endpoint, prod);
    }

    update(client: Product) {
        return this.http.put(EndPoints.productController.update + client.RefId, client);
    }

    delete(id: number) {
        return this.http.delete(EndPoints.productController.delete + id);
    }
}