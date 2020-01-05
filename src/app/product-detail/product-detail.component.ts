import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PubSubService } from '../services/pup-sub.service';
import { WishlistService } from '../services/wishlist.service';
import { MatSnackBar } from '@angular/material';
import { Helper } from '../services/helper';
import { ResponsiveService } from '../services/pup-sub.service';
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
  screenSize: string;
  constructor(private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService,
    private wishlistService: WishlistService,
    private pubsubService: PubSubService,
    private responsiveService: ResponsiveService,
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
      return `${Helper.apiServerUrl()}StaticFiles/`+ product.imageName;
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
      this.responsiveService.getMobileStatus().subscribe( isMobile =>{
        if(isMobile){
          this.screenSize = "320px";
        }
        else{
          this.screenSize = "450px";
        }
      });
      this.onResize();    
  }
  onResize(){
    this.responsiveService.checkWidth();
  }
  init(action: boolean): void {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.isLoggedIn = currentUser != null;//action;
    this.currentUser = currentUser;
  }
  placeOrder(){
    
  }
  addWish() {
    if(!this.currentUser){
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
}