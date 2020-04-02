import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../../app.material.module';
import { FilterPipeModule } from '../../pipes/filter.module';
import { SnowModule } from '../../shared/snow/snow.module';
import { MouseModule } from '../../shared/mouse/mouse.module';
import { WaveModule } from '../../shared/wave/wave.module';
import { BubblesModule } from '../../shared/bubbles/bubbles.module';
import { GalleryComponent } from './gallery.component';
import { SearchDirective } from '../../shared/search.directive';
import { FormsModule } from '@angular/forms';
import { BannerStillsModule } from '../../banner-stills/banner-stills.module';
import { EvenOddPipeModule } from '../../pipes/even-odd.module';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FilterPipeModule,
    SnowModule,
    MouseModule,
    WaveModule,
    BubblesModule,
    FormsModule,
    BannerStillsModule,
    EvenOddPipeModule
    // BrowserAnimationsModule
  ],
  exports:[
    GalleryComponent
  ],
  declarations: [
    GalleryComponent,
    SearchDirective
  ],
  providers: [
  ]
})
export class GalleryModule { }