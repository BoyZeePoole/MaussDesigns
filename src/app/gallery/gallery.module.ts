import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import {MaterialModule} from '../app.material.module';
import { routing } from './gallery.routing';
import { NgxMasonryModule } from 'ngx-masonry';
import { FilterPipeModule } from '../pipes/filter.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    routing,
    NgxMasonryModule,
    FilterPipeModule
  ],
  declarations: [
    GalleryComponent,
  ],
  providers: [
  ]
})
export class GalleryModule { }