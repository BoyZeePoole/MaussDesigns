import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../app.material.module';
import { SplashComponent } from '../splash/splash.component';
import { routing } from './splash.routing';
import {SlideshowModule} from 'ng-simple-slideshow';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    routing,
    SlideshowModule

  ],
  declarations: [
      SplashComponent
  ],
  providers : [
  ]
})
export class SplashModule { }