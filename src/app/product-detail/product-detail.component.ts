import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  selectProductId : number;
  products: any;
  firstProduct: any;
  constructor(private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService) {
      this.selectProductId = route.snapshot.params['refId'];
      this.getProduct();
     }

  ngOnInit() {
  }
  getProduct(){
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
  getImage(product: any){
    if(product){
      return "https://api.mauss.co.za/StaticFiles/" + product.imageName;
    }   
}
}