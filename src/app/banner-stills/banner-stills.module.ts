import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerStillsComponent } from './banner-stills.component';

@NgModule({
  declarations: [
    BannerStillsComponent
  ],
  exports: [
    BannerStillsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BannerStillsModule { }
