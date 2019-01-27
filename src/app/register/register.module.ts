import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { RegisterComponent } from './register.component';
import {MaterialModule} from '../app.material.module';
import { routing } from './register.routing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ConfigurationService } from '../services/config.service';
import { HttpClientModule } from '@angular/common/http';
import { AlertService } from '../services/alert.service';
import { UserService } from '../services/user.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    routing,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [],
  //exports: [RegisterComponent],
  providers : [
    UserService,
    AlertService,
    HttpClientModule,
    ConfigurationService
  ]
})
export class RegisterModule { }