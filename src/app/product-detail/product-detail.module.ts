import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent, DialogDialog } from './product-detail.component';
import { MaterialModule } from '../app.material.module';
import { routing } from './product-detail.routing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ConfigurationService } from '../services/config.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from '../services/product.service';
import { WishlistService } from '../services/wishlist.service';
import { GroupService } from '../services/group.service';
import { DynamicFormBuilderModule } from '../dynamic-form-builder/dynamic-form-builder.module';
import { FacebookModule } from '../social-buttons/facebook/facebook.module';
import { ResponsiveService } from '../services/pup-sub.service';
import { ColorWheelService } from '../services/color.service';
import { OrderService } from '../services/order.service';
import { DirectiveModule } from '../shared/directive-module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    routing,
    ReactiveFormsModule,
    FormsModule,
    DynamicFormBuilderModule,
    FacebookModule,
    DirectiveModule
  ],
  entryComponents: [DialogDialog],
  declarations: [
    ProductDetailComponent,
    DialogDialog
  ],
  providers: [
    ProductService,
    GroupService,
    HttpClientModule,
    ConfigurationService,
    WishlistService,
    ResponsiveService,
    ColorWheelService,
    OrderService

  ]
})
export class ProductDetailModule { }