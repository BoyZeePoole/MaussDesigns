import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnChanges {
  products: any;
  randomProduct: any;
  @Input() gridData : any; 


  constructor() { }
  ngOnChanges() {
    this.products = this.gridData;
  }
  ngOnInit() {
    this.products = this.gridData
  }
  getImage(product){
    if(product){
      return "https://api.mauss.co.za/StaticFiles/" + product.imageName;
    }    
  }
}
