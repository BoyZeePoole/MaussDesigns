import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, UserExtended } from '../models/user';
import { EndPoints } from './settings';
import { ConfigurationService } from './config.service';

@Injectable()
export class UserService {
    constructor(private http: HttpClient,
        private configService: ConfigurationService) { }

    getAll() {
        return this.http.get<User[]>(EndPoints.userController.getAllUsers);
    }

    getById(id: number) {
        let endpoint = this.configService.RootUrl() + EndPoints.userController.getUserById;
        return this.http.get(endpoint + '?id=' + id);
    }

    getMenuByUserId(id: number) {
        let endpoint = this.configService.RootUrl() + EndPoints.userController.getMenu
        return this.http.get(endpoint + '?id=' + id);
    }

    register(user: User) {
        let endpoint = this.configService.RootUrl() + EndPoints.userController.register
        return this.http.post(endpoint, user);
    }

    update(user: User) {
        let endpoint = this.configService.RootUrl() + EndPoints.userController.update
        return this.http.put(endpoint + user.id, user);
    }

    delete(id: number) {
        return this.http.delete(EndPoints.userController.delete + id);
    }
    updateAccount(user: UserExtended){
        let endpoint = this.configService.RootUrl() + EndPoints.userController.updateAccount
        return this.http.post<any>(endpoint, user);
    }
}