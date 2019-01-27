import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { HomeComponent } from './home.component';
import {MaterialModule} from '../app.material.module';
import { routing } from './home.routing';
import { LinkMenuModule } from '../link-menu/link-menu.module';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    routing,
    LinkMenuModule
  ],
  declarations: [],
  providers: [ ]
})
export class HomeModule { }