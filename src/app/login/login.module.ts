import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import {MaterialModule} from '../app.material.module';
import { routing } from './login.routing';
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    routing
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }