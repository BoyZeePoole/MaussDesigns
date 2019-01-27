import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail.component';
import {MaterialModule} from '../app.material.module';
import { routing } from './product-detail.routing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ConfigurationService } from '../services/config.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductService} from '../services/product.service';
import { GroupService} from '../services/group.service';
import { DynamicFormBuilderModule } from '../dynamic-form-builder/dynamic-form-builder.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    routing,
    ReactiveFormsModule,
    FormsModule,
    DynamicFormBuilderModule
  ],
  declarations: [
    ProductDetailComponent,
  ],
  providers : [
    ProductService,
    GroupService,
    HttpClientModule,
    ConfigurationService
  ]
})
export class ProductDetailModule { }