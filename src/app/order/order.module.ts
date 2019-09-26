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


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    routing,
    ReactiveFormsModule, 
    FormsModule,
    DynamicFormBuilderModule,
    DragDropModule 
  ],
  declarations: [
    OrderComponent,
  ],
  providers : [
    ProductService,
    HttpClientModule,
    ConfigurationService,
    
  ]
})
export class OrderModule { }