import { Component, OnInit, Inject } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PubSubService } from '../services/pup-sub.service';
import { WishlistService } from '../services/wishlist.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Helper } from '../services/helper';
import { ResponsiveService } from '../services/pup-sub.service';
import { IProductOptions } from '../models/product-options';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OrderService } from '../services/order.service';
import { ColorWheelService } from '../services/color.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


export interface DialogData {
  color: string[];
}

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  isLoggedIn: boolean = false;
  selectProductId: number;
  mobileOptionId: number;
  products: any;
  firstProduct: any;
  currentUser: any;
  screenSize: string;
  productOptions: IProductOptions[];
  productPrice: number;
  selectedColor: any = [];
  orderForm: FormGroup;
  price: number;


  constructor(private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService,
    private service: OrderService,
    private wishlistService: WishlistService,
    private pubsubService: PubSubService,
    private responsiveService: ResponsiveService,
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    public snackBar: MatSnackBar) {
    this.selectProductId = route.snapshot.params['refId'];
    this.getProduct();
    this.init(this.isLoggedIn);
    this.getProductOptions();

  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogDialog, {
      //width: '250px',
      data: { color: this.selectedColor }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.selectedColor = result;
    });
  }

  getProductOptions() {
    this.productService.getMobileOptions()
      .subscribe(
        data => {
          this.productOptions = <IProductOptions[]>data;
        },
        error => {
          console.log(error);
        });
  }
  updatePrice(event: IProductOptions) {
    this.productPrice = event.price;
    this.mobileOptionId = event.refId;
  }
  getPrice() {
    this.productPrice = this.firstProduct.price;
  }
  getProduct() {
    this.productService.getById(this.selectProductId)
      .subscribe(
        data => {
          this.products = data;
          this.firstProduct = this.products.length > 0 ? this.products[0] : null;
          this.getPrice();
        },
        error => {
          console.log(error);
        });
  }
  getImage(product: any) {
    let imageName = (typeof product === 'object') ? product.imageName : product;
    if (product) {
      return `${Helper.apiServerUrl()}StaticFiles/` + imageName;
    }
  }
  changeImg(product: any) {
    if (product) {
      this.firstProduct = product;
    }
  }
  ngOnInit() {
    this.pubsubService.isLoggedIn.subscribe(
      data => {
        this.init(data);
      });
    this.responsiveService.getMobileStatus().subscribe(isMobile => {
      if (isMobile) {
        this.screenSize = "320px";
      }
      else {
        this.screenSize = "450px";
      }
    });
    this.onResize();
  }
  onResize() {
    this.responsiveService.checkWidth();
  }
  init(action: boolean): void {
    this.orderForm = this.formBuilder.group({
      comment: ['', null],
      productRefId: null,
      userRefId: null,
      colour1: [null],
      colour2: [null],
      colour3: [null],
      quantity: ['', null],
      price: ['', null],
      mobileOptionRefId: [null]
    });

    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.isLoggedIn = currentUser != null;//action;
    this.currentUser = currentUser;
  }
  placeOrder() {

  }
  addWish() {
    if (!this.currentUser) {
      this.snackBar.open('Please login / register to add to your wishlist.', null, {
        duration: 2000,
      });
      //this.router.navigate(['/home/registerlogin'], { queryParams: { returnUrl: state.url }});
    }
    this.wishlistService.add(this.currentUser.id, this.firstProduct.refId)
      .subscribe(
        success => {
          this.snackBar.open('Wish added...', null, {
            duration: 2000,
          });
        },
        error => {
          console.log(error);
        });
  }

  save() {
    if (this.orderForm.invalid) return;
    if (!this.currentUser) {
      this.snackBar.open('Please login / register to add to your wishlist.', null, {
        duration: 2000,
      });
      //this.router.navigate(['/home/registerlogin'], { queryParams: { returnUrl: state.url }});
    }
    this.service.save(this.prepareSaveUser())
      .subscribe(
        success => {
          this.snackBar.open('Order added...', null, {
            duration: 2000,
          });
          this.router.navigate(['/home/orderlist']);
        },
        error => {
          console.log(error);
        });

  }
  prepareSaveUser(): FormData {

    const formModel = this.orderForm.value;
    let formData = new FormData();
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    let price = this.productPrice
    formData.append("refid", "0");
    formData.append("userrefid", currentUser.id);
    formData.append("comment", formModel.comment);
    formData.append("quantity", formModel.quantity);
    formData.append("price", price.toString());
    formData.append("productRefId", this.selectProductId.toString());
    formData.append("mobileOptionRefId", this.mobileOptionId.toString());

    let colors = this.selectedColor.length | 0;
    for (var f = 0; f < colors; f++) {
      formData.append("color" + (f + 1), this.selectedColor[f]);
    }
    return formData;
  }
}

@Component({
  selector: 'dialog-dialog',
  templateUrl: 'dialog.html',
  styleUrls: ['./product-detail.component.scss']
})
export class DialogDialog {

  colorPallette: any;
  constructor(
    private colorWheelService: ColorWheelService,
    public dialogRef: MatDialogRef<DialogDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.getColors();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  selectIt(item: HTMLElement, color: string) {
    item.className = (item.className === "Pantone black") ? "Pantone" : "Pantone black";
    if (!this.data.color) {
      this.data.color = [];
    }
    if (this.data.color.findIndex(x => x.toString() == color))
      this.data.color.push(color);
  }
  getColors() {
    this.colorWheelService.getAll()
      .subscribe(
        data => {
          this.colorPallette = data;
        },
        error => {
          console.log(error);
        }
      )
  }
  getImage(color) {
    if (color) {
      return `${Helper.apiServerUrl()}StaticFiles/` + color.colorPath;
    }
  }
}
