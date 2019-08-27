import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRegisterContainerComponent } from './login-register-container.component';
import {MaterialModule} from '../app.material.module';
import { routing } from './login-register-container.router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ConfigurationService } from '../services/config.service';
import { HttpClientModule } from '@angular/common/http';
import { AlertService } from '../services/alert.service';
import {  AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';
import { LoginComponent} from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { FormService } from '../services/form.service';
import { DynamicFormBuilderModule } from '../dynamic-form-builder/dynamic-form-builder.module';
import { SnowModule } from '../shared/snow/snow.module';
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    routing,
    ReactiveFormsModule,
    FormsModule,
    DynamicFormBuilderModule,
    SnowModule
  ],
  declarations: [
    LoginRegisterContainerComponent,
    LoginComponent,
    RegisterComponent
],
  providers : [
    AuthenticationService,
    AlertService,
    HttpClientModule,
    ConfigurationService,
    UserService,
    FormService
  ]
})
export class LoginRegisterContainerModule { }