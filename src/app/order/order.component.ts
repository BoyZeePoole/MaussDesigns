import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Helper } from '../services/helper';
import { Router, ActivatedRoute } from '@angular/router';

import { ProductService } from '../services/product.service';

import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  orderForm: FormGroup;

  selectProductId: number;
  products: any;

  colorPallette: any = ['Shortbread', 'Cinnamon', 'Brown', 'Cinnamon'];
  selectedColor: any = [];

  constructor(private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private productService: ProductService) {
    this.selectProductId = route.snapshot.params['refId'];
    this.getProduct();
  }

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      comment: ['', null]
    });
    this.getProduct();
  }
  getProduct() {
    this.productService.getById(this.selectProductId)
      .subscribe(
        data => {
          this.products = data;
        },
        error => {
          console.log(error);
        });
  }
  getImage(product: any) {
    if (product) {
      return `${Helper.apiServerUrl()}StaticFiles/` + product.imageName;
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.container.id === 'even' && event.container.data.length > 2) return;
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);

    }
  }

  noReturnPredicate() {
    //return false;
  }

}
