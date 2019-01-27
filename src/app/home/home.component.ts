import { Component, OnInit, OnChanges } from '@angular/core';
import { MenuRoutes } from '../services/settings';
import { Router, ActivatedRoute } from '@angular/router';
import { ApplicationSettings } from '../services/settings';

import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnChanges{
  routes = MenuRoutes;
  app = ApplicationSettings;
  isHome = true;
  products: any;
  searchText: any;
  userName: string;
  groupId: any;
  constructor(private router: Router,
              private route: ActivatedRoute,
              private productService: ProductService) { 
      this.groupId = route.snapshot.params['refId'];
      
      this.getAllProducts();
      this.router.routeReuseStrategy.shouldReuseRoute = function(){
        return false;
      }

      let currentUser = JSON.parse(localStorage.getItem('currentUser'));
      if(currentUser != null && currentUser.rights !== undefined && currentUser.rights.title != ''){
          this.routes = currentUser.rights;
      }
      this.isHome = this.router.url == '/home' ? true : false;
      if(!this.isHome){
        if(this.groupId !== null || this.groupId !== undefined){
          this.isHome = this.router.url == '/home/' + this.groupId ? true : false;
        }
      }
  }
  ngOnChanges() {
    this.getAllProducts();
  }
  ngOnInit() {
    if(localStorage.currentUser != undefined){
      var user = JSON.parse(localStorage.currentUser);
      this.userName = user.firstName + ' ' + user.lastName;
    }
    this.getAllProducts();
  }

  getAllProducts(){
   this.productService.getAll(this.groupId)
    .subscribe(
      data => {
        this.products = data;
      },
      error => {
        console.log(error);
      });
  }
  getProductsByGroup(){
    this.productService.getByGroupId(this.groupId)
     .subscribe(
       data => {
         this.products = data;
       },
       error => {
         console.log(error);
       });
   }

}
