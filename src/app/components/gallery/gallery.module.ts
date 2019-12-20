import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../../app.material.module';
import { FilterPipeModule } from '../../pipes/filter.module';
import { SnowModule } from '../../shared/snow/snow.module';
import { MouseModule } from '../../shared/mouse/mouse.module';
import { WaveModule } from '../../shared/wave/wave.module';
import { BubblesModule } from '../../shared/bubbles/bubbles.module';
import { GalleryComponent } from './gallery.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FilterPipeModule,
    SnowModule,
    MouseModule,
    WaveModule,
    BubblesModule
  ],
  exports:[
    GalleryComponent
  ],
  declarations: [
    GalleryComponent
  ],
  providers: [
  ]
})
export class GalleryModule { }