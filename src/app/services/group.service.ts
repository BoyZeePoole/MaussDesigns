import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Group } from '../models/';
import { EndPoints } from './settings';
import { ConfigurationService } from './config.service';

@Injectable()
export class GroupService {
    constructor(private http: HttpClient
                ,private configService: ConfigurationService) { }
    getAll() {
        let endpoint = this.configService.RootUrl() + EndPoints.groupController.get;
        return this.http.get<Group[]>(endpoint);
    }
}