import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CustomizeComponent } from './customize.component';
import { MaterialModule } from '../app.material.module';
import { routing } from './customize.routing';
import { CustomizeService } from '../services/customize.service';
import { DialogDialog } from './customize.component';
import { ColorWheelService } from '../services/color.service';
import { ProductService } from '../services/product.service';
import { SnowModule } from '../shared/snow/snow.module';
import { DirectiveModule } from '../shared/directive-module';
import { BannerStillsModule } from '../banner-stills/banner-stills.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    routing,
    ReactiveFormsModule,
    FormsModule,
    SnowModule,
    DirectiveModule,
    BannerStillsModule
  ],
  entryComponents: [DialogDialog],
  declarations: [
    CustomizeComponent,
    DialogDialog,
  ],
  providers: [
    CustomizeService,
    ColorWheelService,
    ProductService
  ]
})
export class CustomizeModule { }