import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PubSubService } from '../services/pup-sub.service';
import { WishlistService } from '../services/wishlist.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  isLoggedIn: boolean = false;
  selectProductId: number;
  products: any;
  firstProduct: any;
  currentUser: any;
  constructor(private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService,
    private wishlistService: WishlistService,
    private pubsubService: PubSubService,
    public snackBar: MatSnackBar) {
    this.selectProductId = route.snapshot.params['refId'];
    this.getProduct();
    this.init(this.isLoggedIn);
  }
  getProduct() {
    this.productService.getById(this.selectProductId)
      .subscribe(
        data => {
          this.products = data;
          this.firstProduct = this.products.length > 0 ? this.products[0] : null;
        },
        error => {
          console.log(error);
        });
  }
  getImage(product: any) {
    if (product) {
      return "http://localhost:60076/StaticFiles/" + product.imageName;
      //return "https://api.mauss.co.za/StaticFiles/" + product.imageName;

    }
  }
  changeImg(product: any) {
    if (product) {
      this.firstProduct = product;
    }
  }
  ngOnInit() {
    // Here we wanna register a listener... typothing
    this.pubsubService.isLoggedIn.subscribe(
      data => {
        this.init(data);
      });
  }
  init(action: boolean): void {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.isLoggedIn = currentUser != null;//action;
    this.currentUser = currentUser;
  }
  addWish() {
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
}