import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../app.material.module';
import { SplashComponent } from '../splash/splash.component';
import { routing } from './splash.routing';
import { BannerStillsModule } from '../banner-stills/banner-stills.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    routing,
    BannerStillsModule

  ],
  declarations: [
      SplashComponent
  ],
  providers : [
  ]
})
export class SplashModule { }