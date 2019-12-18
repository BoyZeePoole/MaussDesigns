import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';
import {MaterialModule} from '../app.material.module';
import { routing } from './order.routing';
import { ConfigurationService } from '../services/config.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductService} from '../services/product.service';
import { DynamicFormBuilderModule } from '../dynamic-form-builder/dynamic-form-builder.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { DialogDialog } from './order.component';
import { OrderService } from '../services/order.service';
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    routing,
    ReactiveFormsModule, 
    FormsModule,
    DynamicFormBuilderModule,
    DragDropModule,
    NgxUsefulSwiperModule
  ],
  entryComponents: [DialogDialog],
  declarations: [
    OrderComponent,
    DialogDialog
  ],
  providers : [
    ProductService,
    HttpClientModule,
    ConfigurationService,
    OrderService
    
  ]
})
export class OrderModule { }