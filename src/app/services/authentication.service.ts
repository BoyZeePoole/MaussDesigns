import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { EndPoints } from './settings';
import { ConfigurationService } from './config.service';

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient,
                private configService: ConfigurationService) { }

    login(email: string, password: string) {
        let endpoint = this.configService.RootUrl() + EndPoints.userController.authenticate;
        return this.http.post<any>(endpoint, { email: email, password: password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}