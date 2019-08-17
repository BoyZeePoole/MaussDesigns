import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnowComponent } from './snow.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SnowComponent],
  exports:
  [
    SnowComponent
  ],
  
  providers : [
  ]
})
export class SnowModule { }