import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Helper } from '../services/helper';
import { Router, ActivatedRoute } from '@angular/router';

import { ProductService } from '../services/product.service';
import { MatSnackBar } from '@angular/material';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag } from '@angular/cdk/drag-drop';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  orderForm: FormGroup;

  selectProductId: number;
  products: any;

  colorPallette: any = ['2@300x.png',
'Asset 10@300x.png',
'Asset 11@300x.png',
'Asset 12@300x.png',
'Asset 13@300x.png',
'Asset 14@300x.png',
'Asset 15@300x.png',
'Asset 16@300x.png',
'Asset 17@300x.png',
'Asset 18@300x.png',
'Asset 19@300x.png',
'Asset 1@300x.png',
'Asset 20@300x.png',
'Asset 21@300x.png',
'Asset 22@300x.png',
'Asset 23@300x.png',
'Asset 24@300x.png',
'Asset 25@300x.png',
'Asset 26@300x.png',
'Asset 27@300x.png',
'Asset 28@300x.png',
'Asset 29@300x.png',
'Asset 30@300x.png',
'Asset 31@300x.png',
'Asset 32@300x.png',
'Asset 33@300x.png',
'Asset 34@300x.png',
'Asset 35@300x.png',
'Asset 36@300x.png',
'Asset 37@300x.png',
'Asset 38@300x.png',
'Asset 39@300x.png',
'Asset 3@300x.png',
'Asset 40@300x.png',
'Asset 41@300x.png',
'Asset 42@300x.png',
'Asset 43@300x.png',
'Asset 44@300x.png',
'Asset 45@300x.png',
'Asset 46@300x.png',
'Asset 47@300x.png',
'Asset 48@300x.png',
'Asset 49@300x.png',
'Asset 4@300x.png',
'Asset 50@300x.png',
'Asset 51@300x.png',
'Asset 52@300x.png',
'Asset 53@300x.png',
'Asset 54@300x.png',
'Asset 55@300x.png',
'Asset 56@300x.png',
'Asset 57@300x.png',
'Asset 58@300x.png',
'Asset 59@300x.png',
'Asset 5@300x.png',
'Asset 60@300x.png',
'Asset 61@300x.png',
'Asset 62@300x.png',
'Asset 63@300x.png',
'Asset 64@300x.png',
'Asset 65@300x.png',
'Asset 66@300x.png',
'Asset 67@300x.png',
'Asset 6@300x.png',
'Asset 7@300x.png',
'Asset 8@300x.png',
'Asset 9@300x.png']
  selectedColor: any = [];


  config: SwiperOptions = {
    slidesPerView: 8,
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 5
  };

  
  constructor(private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private productService: ProductService,
    public snackBar: MatSnackBar) {
    this.selectProductId = route.snapshot.params['refId'];
    this.getProduct();
  }

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      comment: ['', null]
    });
    this.getProduct();
  }

  get f() { return this.orderForm.controls; }

  getProduct() {
    this.productService.getById(this.selectProductId)
      .subscribe(
        data => {
          this.products = data;
        },
        error => {
          console.log(error);
        });
  }
  // onSubmit() {

  //   if (this.orderForm.invalid) {
  //     return;
  //   }
  //   this.userService.updateAccount(this.prepareUser())
  //     .pipe(first())
  //     .subscribe(
  //       data => {
  //         //this.alertService.success('Updated successful', true);
  //         this.snackBar.open('Updated detail', null, {
  //           duration: 2000,
  //         });
  //       },
  //       error => {
  //         this.snackBar.open(error, null, {
  //           duration: 2000,
  //         });
  //       });
  // }

  // prepareOrder() {
  //   const formModel = this.orderForm.value;
  
  //   let currentUser = JSON.parse(localStorage.getItem('currentUser'));
  //   this.userExtended.refId = currentUser.id;
  //   this.userExtended.firstName = formModel.firstName;
  //   this.userExtended.lastName = formModel.lastName;
  //   this.userExtended.email = formModel.email;
  //   this.userExtended.DateOfBirth = new Date(parseInt(formModel.dateOfBirth_YYYY), parseInt(formModel.dateOfBirth_MM) -1, parseInt(formModel.dateOfBirth_DD)).toLocaleDateString();
  //   this.userExtended.password = formModel.password;
  //   this.userExtended.currentPassword = formModel.currentPassword;
  //   this.userExtended.rightsId = formModel.rightsId;
  //   this.userExtended.contactNumber = formModel.contactNumber;
  
  //   return this.userExtended;
  // }

  getImage(product: any) {
    if (product) {
      return `${Helper.apiServerUrl()}StaticFiles/` + product.imageName;
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.container.id === 'even' && event.container.data.length > 2) return;
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);

    }
  }

  noReturnPredicate() {
    //return false;
  }

}
