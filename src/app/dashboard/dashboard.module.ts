import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {MaterialModule} from '../app.material.module';
import { routing } from './dashboard.routing';
import { FilterPipeModule } from '../pipes/filter.module';
import { SnowModule } from '../shared/snow/snow.module';
import { MouseModule } from '../shared/mouse/mouse.module';
import { WaveModule } from '../shared/wave/wave.module';
import { BubblesModule } from '../shared/bubbles/bubbles.module';
import { GalleryModule } from '../components/gallery/gallery.module';
import { BannerStillsModule } from '../banner-stills/banner-stills.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    routing,
    FilterPipeModule,
    SnowModule,
    MouseModule,
    WaveModule,
    BubblesModule,
    GalleryModule,
    BannerStillsModule
  ],
  declarations: [
    DashboardComponent,
  ],
  providers: [
  ]
})
export class DashboardModule { }