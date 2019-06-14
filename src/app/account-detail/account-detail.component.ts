import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService } from '../services/alert.service';
import { UserService } from '../services/user.service';
import { MustMatch } from '../directives/custom.validators';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.scss']
})
export class AccountDetailComponent implements OnInit {
  accountForm: FormGroup;
  loading = false;
  submitted = false;
  dontMatch = false;
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    public snackBar: MatSnackBar,
    private alertService: AlertService) { }

  ngOnInit() {
    this.accountForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth_DD: [],
      dateOfBirth_MM: [],
      dateOfBirth_YYYY: [],
      contactNumber: [],
      email: ['', Validators.required],
      currentpassword: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['', Validators.required]
  },{
      validator: MustMatch('password', 'password2')
  });
  }
  get f() { return this.accountForm.controls; }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.accountForm.invalid) {
        return;
    }
    if (this.accountForm.controls['password'].value != this.accountForm.controls['password2'].value) {
        //this.registerForm.controls['password2'].errors = true;
        this.dontMatch = true;
        return;
    }

    this.loading = true;
    this.userService.register(this.accountForm.value)
        .pipe(first())
        .subscribe(
            data => {
                this.alertService.success('Updated successful', true);
                this.snackBar.open('Updated detail', null, {
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
