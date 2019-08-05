import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService } from '../services/alert.service';
import { UserService } from '../services/user.service';
import { MustMatch } from '../directives/custom.validators';
import { MatSnackBar } from '@angular/material';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    loading = false;
    submitted = false;
    dontMatch = false;
    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private userService: UserService,
        public snackBar: MatSnackBar,
        private alertService: AlertService) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            dateOfBirth_DD: [],
            dateOfBirth_MM: [],
            dateOfBirth_YYYY: [],
            contactNumber: [],
            email: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]],
            password2: ['', Validators.required]
        }, {
                validator: MustMatch('password', 'password2')
            });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        if (this.registerForm.controls['password'].value != this.registerForm.controls['password2'].value) {
            //this.registerForm.controls['password2'].errors = true;
            this.dontMatch = true;
            return;
        }

        this.loading = true;
        this.userService.register(this.registerForm.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.snackBar.open('Registration successful', null, {
                        duration: 2000,
                    });
                    this.loading = false;
                },
                error => {
                    this.snackBar.open(error, null, {
                        duration: 2000,
                    });
                    this.loading = false;
                });
    }
}