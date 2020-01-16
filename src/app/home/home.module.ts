import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../app.material.module';
import { routing } from './home.routing';
import { UserMenuModule } from '../user-menu/user-menu.module';
import { LinkMenuModule } from '../link-menu/link-menu.module';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    routing,
    LinkMenuModule,
    // BrowserAnimationsModule,
    UserMenuModule,
  ],
  declarations: [],
  providers: [  ]
})
export class HomeModule { }