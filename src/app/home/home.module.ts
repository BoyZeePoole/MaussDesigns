import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {MaterialModule} from '../app.material.module';
import { routing } from './home.routing';
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    routing
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }