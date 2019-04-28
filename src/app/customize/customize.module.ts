import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CustomizeComponent } from './customize.component';
import {MaterialModule} from '../app.material.module';
import { routing } from './customize.routing';
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    routing,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    CustomizeComponent

  ],
  providers: [
  ]
})
export class CustomizeModule { }