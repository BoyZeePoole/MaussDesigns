import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../services/wishlist.service';
import { Helper } from '../services/helper';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {
products: any;
  constructor(private wishListService: WishlistService, private router: Router,
              public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getWishList();
  }


  getWishList() {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.wishListService.getAll(currentUser.id)
      .subscribe(
        data => {
          this.products = data;
        },
        error => {
          console.log(error);
        });
  }
  getImage(product){
    if(product){
      return `${Helper.apiServerUrl()}StaticFiles/` + product.imageName;
      //return "http://localhost:60076/StaticFiles/" + product.imageName;
    }    
  }
  delete(id){
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.wishListService.delete(currentUser.id, id)
      .subscribe(
        data => {
          this.getWishList();
          this.snackBar.open('Wish removed...', null, {
            duration: 2000,
          });
        },
        error => {
          console.log(error);
        });
  }

  gotoProductDetails(url, id) {
    var myurl = `${url}/${id}`;
    this.router.navigateByUrl(myurl).then(e => {
      if (e) {
        console.log("Navigation is successful!");
      } else {
        console.log("Navigation has failed!");
      }
    });
  }
}
