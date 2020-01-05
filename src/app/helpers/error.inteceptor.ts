import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService,
                private router: Router) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            let error: any;
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.authenticationService.logout();
                this.router.navigate(['/home/registerlogin']);
            }
            if(err.status === 0){
                error = "You are not connected to service api";
            }
            else{
                error = err.error.message || err.statusText;
            }
            return throwError(error);
        }))
    }
}