import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { UserService } from '../services/user.service';
import { AddressService } from '../services/address.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  addressForm: FormGroup;
  addressId: string;
  address: any;
  userId: any;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    public snackBar: MatSnackBar,
    private addressService: AddressService,
    private formBuilder: FormBuilder) {
    this.addressId = route.snapshot.params['refId'];
  }

  ngOnInit() {
    this.addressForm = this.formBuilder.group({
      street: ['', Validators.required],
      town: ['', Validators.required],
      city: ['', Validators.required],
      province: ['', Validators.required],
      country: ['', Validators.required],
      postalcode: ['', Validators.required]
    });
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.userId = currentUser.id;
    this.onLoad();
  }
  get f() { return this.addressForm.controls; }

  save() {
    if (this.addressForm.invalid) return;
    this.addressService.save(this.prepareSaveUser())
      .subscribe(
        success => {
          this.snackBar.open('Address updated...', null, {
            duration: 2000,
          });
          //this.router.navigate(['/home/orderlist']);
        },
        error => {
          console.log(error);
        });
  }


  prepareSaveUser(): FormData {
    const formModel = this.addressForm.value;
    let formData = new FormData();

    formData.append("RefId", this.addressId || '0');
    formData.append("UserRefId", this.userId);
    formData.append("StreetAddress", formModel.street);
    formData.append("Town", formModel.town);
    formData.append("City", formModel.city);
    formData.append("Province", formModel.province);
    formData.append("Country", formModel.country);
    formData.append("PostalCode", formModel.postalcode);

    return formData;
  }


  onLoad() {
    this.addressService.getAll(this.userId).
      subscribe(
        data => {
          if (data) {
            this.address = data;
            this.addressId = this.address.refId;
            this.addressForm.controls['street'].setValue(this.address.streetAddress);
            this.addressForm.controls['town'].setValue(this.address.town);
            this.addressForm.controls['city'].setValue(this.address.city);
            this.addressForm.controls['province'].setValue(this.address.province);
            this.addressForm.controls['country'].setValue(this.address.country);
            this.addressForm.controls['postalcode'].setValue(this.address.postalCode);
          }
        }
      )
  }
}
