import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './register.routing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ConfigurationService } from '../services/config.service';
import { HttpClientModule } from '@angular/common/http';
import { AlertService } from '../services/alert.service';
import { UserService } from '../services/user.service';
import { RecaptchaDirectiveModule  } from 'spaier-ng-recaptcha';
@NgModule({
  imports: [
    CommonModule,
    routing,
    ReactiveFormsModule,
    FormsModule,
    RecaptchaDirectiveModule
  ],
  declarations: [],
  //exports: [RegisterComponent],
  providers : [
    UserService,
    AlertService,
    HttpClientModule,
    ConfigurationService,
    
  ]
})
export class RegisterModule { }