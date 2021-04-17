import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService } from '../services/alert.service';
import { UserService } from '../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserExtended, User } from '../models/user';
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
  user: any;
  userId: any;
  userExtended: UserExtended = new UserExtended();
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
      email: ['', Validators.required]
    });
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.userId = currentUser.id;
    this.onLoad();
  }

  get f() { return this.accountForm.controls; }
  onSubmit() {
    this.submitted = true;

    if (this.accountForm.invalid) {
      return;
    }
    this.loading = true;
    this.userService.updateAccount(this.prepareUser())
      .pipe(first())
      .subscribe(
        data => {
          //this.alertService.success('Updated successful', true);
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

  prepareSaveUser(): FormData {

    const formModel = this.accountForm.value;
    let formData = new FormData();
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));

    formData.append("RefId", currentUser.id);
    formData.append("FirstName", formModel.firstName);
    formData.append("LastName", formModel.lastName);
    formData.append("Email", formModel.email);
    formData.append("DateOfBirth", new Date(parseInt(formModel.dateOfBirth_YYYY), parseInt(formModel.dateOfBirth_MM) - 1, parseInt(formModel.dateOfBirth_DD)).toString());
    formData.append("Password", "");
    formData.append("CurrentPassword", "");
    formData.append("RightsId", "");
    formData.append("ContactNumber", formModel.contactNumber);

    return formData;
  }
  prepareUser(): UserExtended {
    const formModel = this.accountForm.value;

    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.userExtended.refId = currentUser.id;
    this.userExtended.firstName = formModel.firstName;
    this.userExtended.lastName = formModel.lastName;
    this.userExtended.email = formModel.email;
    this.userExtended.DateOfBirth = new Date(parseInt(formModel.dateOfBirth_YYYY), parseInt(formModel.dateOfBirth_MM) - 1, parseInt(formModel.dateOfBirth_DD)).toLocaleDateString();
    this.userExtended.password = formModel.password;
    this.userExtended.currentPassword = formModel.currentPassword;
    this.userExtended.rightsId = formModel.rightsId;
    this.userExtended.contactNumber = formModel.contactNumber;

    return this.userExtended;
  }

  pad(num:number, size:number): string {
    let s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

  onLoad() {
    this.userService.getById(this.userId).
      subscribe(
        data => {
          this.user = data;
          let newDate = new Date(this.user.dateOfBirth);

          this.accountForm.controls['firstName'].setValue(this.user.firstName);
          this.accountForm.controls['lastName'].setValue(this.user.lastName);
          this.accountForm.controls['contactNumber'].setValue(this.user.contactNumber);
          this.accountForm.controls['email'].setValue(this.user.email);
          this.accountForm.controls['dateOfBirth_DD'].setValue( this.pad(newDate.getDate(), 2));
          this.accountForm.controls['dateOfBirth_MM'].setValue(this.pad(newDate.getMonth() + 1, 2));
          this.accountForm.controls['dateOfBirth_YYYY'].setValue(newDate.getFullYear());
        }
      )
  }
}
