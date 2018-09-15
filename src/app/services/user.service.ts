import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { EndPoints } from './settings';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(EndPoints.userController.getAllUsers);
    }

    getById(id: number) {
        return this.http.get(EndPoints.userController.getUserById + id);
    }

    register(user: User) {
        return this.http.post(EndPoints.userController.register, user);
    }

    update(user: User) {
        return this.http.put(EndPoints.userController.update + user.id, user);
    }

    delete(id: number) {
        return this.http.delete(EndPoints.userController.delete + id);
    }
}