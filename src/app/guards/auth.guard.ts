import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router,
        public snackBar: MatSnackBar
        ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/home/registerlogin'], { queryParams: { returnUrl: state.url }});
        this.snackBar.open("Please login / register to proceed", "🛑", {
            duration: 10000,
          });
        return false;
    }
}