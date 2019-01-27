import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../app.material.module';
import { routing } from './link-menu.routing';
//import { LinkMenuComponent } from './link-menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    routing
  ],
  declarations: [ ]  
})
export class LinkMenuModule { }