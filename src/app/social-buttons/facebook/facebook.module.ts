import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacebookComponent } from './facebook.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FacebookComponent,
  ],
  exports:[
    FacebookComponent
  ],
  providers : []
})
export class FacebookModule { }