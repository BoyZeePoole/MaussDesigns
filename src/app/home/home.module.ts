import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../app.material.module';
import { routing } from './home.routing';
import { LinkMenuModule } from '../link-menu/link-menu.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    routing,
    LinkMenuModule,
    BrowserAnimationsModule 
  ],
  declarations: [],
  providers: [  ]
})
export class HomeModule { }