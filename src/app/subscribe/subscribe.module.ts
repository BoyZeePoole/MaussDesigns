import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { SubscribeComponent } from './subscribe.component';
import {MaterialModule} from '../app.material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ConfigurationService } from '../services/config.service';
import { HttpClientModule } from '@angular/common/http';
//import { SubscribeService} from '../services/subscribe.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [],
  providers : [
   // SubscribeService,
    HttpClientModule,
    ConfigurationService
  ]
})
export class SubscribeModule { }