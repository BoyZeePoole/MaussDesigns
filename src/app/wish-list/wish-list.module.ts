import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishListComponent } from './wish-list.component';
import {MaterialModule} from '../app.material.module';
import { routing } from './wish-list.routing';
import { ConfigurationService } from '../services/config.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductService} from '../services/product.service';
import { WishlistService } from '../services/wishlist.service';
import { DynamicFormBuilderModule } from '../dynamic-form-builder/dynamic-form-builder.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    routing,
    DynamicFormBuilderModule
  ],
  declarations: [
    WishListComponent,
  ],
  providers : [
    ProductService,
    HttpClientModule,
    ConfigurationService,
    WishlistService
  ]
})
export class WishListModule { }