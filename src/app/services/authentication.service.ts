import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { EndPoints } from './settings';
import { ConfigurationService } from './config.service';
import { PubSubService } from './pup-sub.service';

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient,
                private configService: ConfigurationService,
                private pubSubService: PubSubService) { }

    login(email: string, password: string) {
        let endpoint = this.configService.RootUrl() + EndPoints.userController.authenticate;
        return this.http.post<any>(endpoint, { email: email, password: password })
            .pipe(map(user => {
                if (user && user.token) {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.pubSubService.setLoggedIn(true);
                }

                return user;
            }));
    }

    logout() {
        localStorage.removeItem('currentUser');
    }
}