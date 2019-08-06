import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {MaterialModule} from '../app.material.module';
import { routing } from './dashboard.routing';
import { FilterPipeModule } from '../pipes/filter.module';
import { SnowComponent } from '../shared/snow/snow.component';
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    routing,
    FilterPipeModule,
    // SnowComponent 
  ],
  declarations: [
    DashboardComponent,
    SnowComponent

  ],
  providers: [
  ]
})
export class DashboardModule { }