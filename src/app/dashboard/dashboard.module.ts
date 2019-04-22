import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {MaterialModule} from '../app.material.module';
import { routing } from './dashboard.routing';
import { FilterPipe } from '../filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    routing,
  ],
  declarations: [
    DashboardComponent,
    FilterPipe

  ],
  providers: [
  ]
})
export class DashboardModule { }