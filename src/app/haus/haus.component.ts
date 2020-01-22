import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PubSubService } from '../services/pup-sub.service';
import { Helper } from '../services/helper';
import { Gallery, GalleryItems } from '../components/gallery/gallery';

@Component({
  selector: 'app-haus',
  templateUrl: './haus.component.html',
  styleUrls: ['./haus.component.scss']
})
export class HausComponent implements OnInit {
  products: any;
  groupId: any;
  searchText: string;
  gridData: Gallery;
  constructor(private productService: ProductService,
    private route: ActivatedRoute,
    private pubsubService: PubSubService, ) {
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
  fillGridData() {
    this.gridData = new Gallery();
    this.gridData.items = [];
    this.gridData.title = "Haus Gallery";
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
}
