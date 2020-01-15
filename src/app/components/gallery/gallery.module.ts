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

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FilterPipeModule,
    SnowModule,
    MouseModule,
    WaveModule,
    BubblesModule,
    FormsModule
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