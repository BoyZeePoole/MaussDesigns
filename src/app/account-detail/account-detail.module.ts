import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountDetailComponent } from './account-detail.component';
import {MaterialModule} from '../app.material.module';
import { routing } from './account-detail.routing';
import { ClientProfileService } from '../services/clientprofile.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ConfigurationService } from '../services/config.service';
import { SnowModule } from '../shared/snow/snow.module';
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    routing,
    ReactiveFormsModule,
    FormsModule,
    SnowModule
  ],
  declarations: [AccountDetailComponent],
  providers : [
    ClientProfileService,
    HttpClientModule,
    ConfigurationService
  ]
})
export class AccountDetailModule { }