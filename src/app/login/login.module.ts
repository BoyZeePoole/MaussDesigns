import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../app.material.module';
import { routing } from './login.routing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ConfigurationService } from '../services/config.service';
import { HttpClientModule } from '@angular/common/http';
import { AlertService } from '../services/alert.service';
import {  AuthenticationService } from '../services/authentication.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    routing,
    ReactiveFormsModule,
    FormsModule,
    //LoginComponent
  ],
  declarations: [],
  providers : [
    AuthenticationService,
    AlertService,
    HttpClientModule,
    ConfigurationService
  ]
})
export class LoginModule { }