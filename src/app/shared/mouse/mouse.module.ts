import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MouseComponent } from './mouse.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MouseComponent],
  exports:
  [
    MouseComponent
  ],
  
  providers : [
  ]
})
export class MouseModule { }