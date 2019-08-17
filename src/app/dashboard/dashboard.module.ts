import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {MaterialModule} from '../app.material.module';
import { routing } from './dashboard.routing';
import { FilterPipeModule } from '../pipes/filter.module';
import { SnowModule } from '../shared/snow/snow.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    routing,
    FilterPipeModule,
    SnowModule
  ],
  declarations: [
    DashboardComponent,
  ],
  providers: [
  ]
})
export class DashboardModule { }