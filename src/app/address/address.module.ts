import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from './address.component';
import { MaterialModule } from '../app.material.module';
import { routing } from './address.routing';
import { SnowModule } from '../shared/snow/snow.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddressService } from '../services/address.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    routing,
    SnowModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    AddressComponent,
  ],
  providers: [
    AddressService
  ]
})
export class AddressModule { }