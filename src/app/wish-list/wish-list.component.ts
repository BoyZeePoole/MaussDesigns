import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../services/wishlist.service';
import { Helper } from '../services/helper';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {
products: any;
  constructor(private wishListService: WishlistService) { }

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
        },
        error => {
          console.log(error);
        });
  }
}
