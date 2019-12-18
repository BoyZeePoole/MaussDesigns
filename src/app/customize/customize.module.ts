import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CustomizeComponent } from './customize.component';
import {MaterialModule} from '../app.material.module';
import { routing } from './customize.routing';
import { ColorPickerModule } from 'ngx-color-picker';
import { CustomizeService} from '../services/customize.service';
import { DialogDialog } from './customize.component';

import { SnowModule } from '../shared/snow/snow.module';
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    routing,
    ReactiveFormsModule,
    FormsModule,
    ColorPickerModule,
    SnowModule
  ],
  entryComponents: [DialogDialog],
  declarations: [
    CustomizeComponent,
    DialogDialog  
  ],
  providers: [
    CustomizeService
  ]
})
export class CustomizeModule { }