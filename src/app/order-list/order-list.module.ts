import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../app.material.module';
import { routing } from './order-list.routing';
import { ConfigurationService } from '../services/config.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductService} from '../services/product.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { OrderService } from '../services/order.service';
import { OrderListComponent } from './order-list.component';
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    routing,
    ReactiveFormsModule, 
    FormsModule,
    DragDropModule,
    NgxUsefulSwiperModule
  ],
  declarations: [
    OrderListComponent,
  ],
  providers : [
    ProductService,
    HttpClientModule,
    ConfigurationService,
    OrderService
    
  ]
})
export class OrderListModule { }