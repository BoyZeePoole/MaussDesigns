import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnChanges {
  products: any;
  randomProduct: any;
  //@Input() gridData : any; 

  groupId: any;
  constructor(private productService: ProductService,
              private router: Router,
              private route: ActivatedRoute) {
    this.groupId = route.snapshot.params['refId'];
    this.getAllProducts();
   }
  ngOnChanges() {
    //this.products = this.gridData;
    this.getAllProducts();
  }
  ngOnInit() {
    //this.products = this.gridData
    this.getAllProducts();
  }
  getImage(product){
    if(product){
      //return "https://api.mauss.co.za/StaticFiles/" + product.imageName;
      return "http://localhost:60076/StaticFiles/" + product.imageName;
    }    
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
