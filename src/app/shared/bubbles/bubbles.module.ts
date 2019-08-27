import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BubblesComponent } from './bubbles.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BubblesComponent],
  exports:
  [
    BubblesComponent
  ],
  
  providers : [
  ]
})
export class BubblesModule { }