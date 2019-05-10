import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxMasonryOptions } from 'ngx-masonry';;
import { PubSubService } from '../services/pup-sub.service';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  products: any;
  groupId: any;
  searchText: string;
  public myOptions: NgxMasonryOptions = {
    transitionDuration: '0.2s',
    gutter: 30
  };
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

  ngOnInit() {
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
   getImage(product){
    if(product){
      return "https://api.mauss.co.za/StaticFiles/" + product.imageName;
      //return "http://localhost:60076/StaticFiles/" + product.imageName;
    }    
  }
}
