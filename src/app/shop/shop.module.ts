import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import {MaterialModule} from '../app.material.module';
import { routing } from './shop.routing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ConfigurationService } from '../services/config.service';
import { HttpClientModule } from '@angular/common/http';
import { AlertService } from '../services/alert.service';
import { UserService } from '../services/user.service';
import { GroupService } from '../services/group.service';

import { EntityService } from '../services/entity.service';
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    routing,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [ShopComponent],
  providers : [
    UserService,
    AlertService,
    HttpClientModule,
    ConfigurationService,
    EntityService,
    GroupService
  ]
})
export class ShopModule { }