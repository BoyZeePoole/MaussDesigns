import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WaveComponent } from './wave.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WaveComponent],
  exports:
  [
    WaveComponent
  ],
  
  providers : [
  ]
})
export class WaveModule { }