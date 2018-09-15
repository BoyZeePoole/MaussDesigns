import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import {MaterialModule} from '../app.material.module';
import { routing } from './products.routing';
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    routing
  ],
  declarations: [ProductsComponent]
})
export class ProductsModule { }