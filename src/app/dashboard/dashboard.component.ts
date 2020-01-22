import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PubSubService } from '../services/pup-sub.service';
import { Helper } from '../services/helper';
import { Gallery, GalleryItems } from '../components/gallery/gallery';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnChanges {
  products: any;
  randomProduct: any;
  //@Input() gridData : any; 
  breakpoint: number;
  groupId: any;
  searchText: string;
  gridData: Gallery;  
  imageUrlArray = [
    "../../assets/banner/slider_images_1.png",
    "../../assets/banner/slider_images_2.png",
    "../../assets/banner/slider_images_3.png"
]; 
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
  getImage(product) {
    if (product) {
      return `${Helper.apiServerUrl()}StaticFiles/` + product.imageName; //"https://api.mauss.co.za/StaticFiles/" + product.imageName;
    }
  }
  fillGridData() {
    this.gridData = new Gallery();
    this.gridData.items = [];
    this.gridData.title = "Kindergarten Gallery";
    this.gridData.link = '/home/productdetail';

    this.products.forEach(element => {
      let detail = new GalleryItems();

      detail.footer = element.description;
      detail.subFooter = (element.price === null) ? element.title : element.price;
      detail.imageName = element.imageName;
      detail.tags = element.tags;
      detail.refId = element.refId;
      this.gridData.items.push(detail);
    });
  }

  getAllProducts() {
    this.productService.getAll(this.groupId)
      .subscribe(
        data => {
          this.products = data;
          this.fillGridData();
        },
        error => {
          console.log(error);
        });
  }
  getProductsByGroup() {
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
