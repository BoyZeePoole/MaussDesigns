import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Helper } from '../services/helper';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  orders: any;

  constructor(private orderService: OrderService, 
              private router: Router,
              public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getOrdersList();
  }
  getImage(product: any) {
    if(!product) return;
    let fileName = (typeof product === 'object') ? product.imageLocation : product;
      return `${Helper.apiServerUrl()}StaticFiles/` + fileName;
  }
  getOrdersList() {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.orderService.getByUserId(currentUser.id)
      .subscribe( 
        data => {
          this.orders = data;
        },
        error => {
          console.log(error);
        });
  }

}
