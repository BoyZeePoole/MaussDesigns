import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService } from '../services/alert.service';
import { UserService } from '../services/user.service';
import { MustMatch } from '../directives/custom.validators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CaptchaRequest } from '../models';
// import { threadId } from 'worker_threads';

declare var grecaptcha: any;

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {
    registerForm: FormGroup;
    siteKey: string = '6LfKrNAUAAAAAPnGRnP1vGgV8FuNegGsj4Jd_A7h';
    loading = false;
    submitted = false;
    dontMatch = false;
    returnUrl: string;
    captchaRequest: CaptchaRequest = new CaptchaRequest();
    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private userService: UserService,
        public snackBar: MatSnackBar,
        private route: ActivatedRoute,
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


        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '';
        this.addScript();
    }

    ngOnDestroy() {
        this.removeScript();
    }

    addScript() {
        const url = 'https://www.google.com/recaptcha/api.js?render=' + this.siteKey;
        if (!document.querySelector(`script[src='${url}']`)) {
            let script = document.createElement('script');
            script.src = url;
            script.async = false;
            script.defer = true;
            document.body.appendChild(script);
        }
    }
    removeScript(){
        const url = 'https://www.google.com/recaptcha/api.js?render=' + this.siteKey;
        if (document.querySelector(`script[src='${url}']`)) {
            let script = document.querySelector(`script[src='${url}']`);
            document.body.removeChild(script);
        }

    }
    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }


    getCaptcha() {
        this.submitted = true;
        if (this.registerForm.invalid) {
            return;
        }
        grecaptcha.ready(() => {
            grecaptcha.execute(this.siteKey, { action: 'home' })
                .then((token) => {
                    this.captchaRequest.remoteIp = '';
                    this.captchaRequest.secret = '';
                    this.captchaRequest.response = token;
                    // console.log(token);
                    this.verifyCaptcha();
                });
        });
    }
    
    verifyCaptcha(){
        this.userService.verifyUser(this.captchaRequest)
            .pipe(first())
            .subscribe(
                data => {
                    if(data.success == true){
                        this.onSubmit();
                    }
                },
                error => {
                    this.snackBar.open(error, null, {
                        duration: 2000,
                    });
                });
    }

    onSubmit() {
        //this.getCaptcha();
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
                    this.alertService.success('Registration successful, please check your email for verification', true);
                    this.snackBar.open('Registration successful, please check your email for verification', null, {
                        duration: 2000,
                    });
                    this.loading = false;
                    if (this.returnUrl != '') {
                        this.router.navigate([this.returnUrl]);
                    }
                },
                error => {
                    this.snackBar.open(error, null, {
                        duration: 2000,
                    });
                    this.loading = false;
                });
    }

}