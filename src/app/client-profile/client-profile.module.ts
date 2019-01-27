import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientProfileComponent } from './client-profile.component';
import {MaterialModule} from '../app.material.module';
import { routing } from './client-profile.routing';
import { ClientProfileService } from '../services/clientprofile.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ConfigurationService } from '../services/config.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    routing,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [ClientProfileComponent],
  providers : [
    ClientProfileService,
    HttpClientModule,
    ConfigurationService
  ]
})
export class ClientProfileModule { }