import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PubSubService } from '../services/pup-sub.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnChanges {
  products: any;
  randomProduct: any;
  //@Input() gridData : any; 
  breakpoint:number;
  groupId: any;
  searchText: string;
  constructor(private productService: ProductService,
              private router: Router,
              private route: ActivatedRoute,
              private pubsubService: PubSubService) {
    this.groupId = route.snapshot.params['refId'];
    this.getAllProducts();
    this.pubsubService.getSearchstring.subscribe(
      data => {
        this.searchText = data;
      }
    );
   }
  ngOnChanges() {
    //this.products = this.gridData;
    this.getAllProducts();
  }
  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 400) ? 2 : 4;
    this.getAllProducts();
  }
  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 2 : 4;
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
