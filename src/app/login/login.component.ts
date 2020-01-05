import { Component, OnInit, Input, ViewChild, QueryList, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, Form, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService } from '../services/alert.service';
import { AuthenticationService } from '../services/authentication.service';
import {MatSnackBar} from '@angular/material';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    /* testing dynamic forms */
    unsubcribe: any;
    @Input() fields: any[] = [];
    // @ViewChild('password', {static: false}) passwordField: ElementRef;
    // @ViewChild('trigger', {static: false}) iconField: ElementRef;
    icon: string = "icon-eye trigger";
    constructor(
        // private el: ElementRef,
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        public snackBar: MatSnackBar,
        private alertService: AlertService) { }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });

        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home/dashboard/1';
    }
    
    get f() { return this.loginForm.controls; }
    getFields() {
        return this.fields;
    }
    onSubmit() {
        this.submitted = true;
        
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.authenticationService.login(this.f.email.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                    this.snackBar.open(error, "🛑", {
                        duration: 2000,
                      });
                });
    }
}

@Component({
    selector: 'alert-snack-bar-component',
    templateUrl: 'alert-snack-bar-component.html',
    styles: [`
      .alert-snack-bar {
        color: red;
      }
    `],
  })
  export class AlertSnackBarComponent {}