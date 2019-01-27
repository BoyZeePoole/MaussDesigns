import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { DashboardComponent } from './dashboard.component';
import {MaterialModule} from '../app.material.module';
import { routing } from './dashboard.routing';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    routing
  ],
  declarations: [],
  providers: [
  ]
})
export class DashboardModule { }