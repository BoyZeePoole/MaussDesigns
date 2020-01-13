import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponsiveService } from '../../services/pup-sub.service';
// import { LoaderComponent } from './loader.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    // LoaderComponent,
  ],
  providers : [
    ResponsiveService
  ]
})
export class LoaderModule { }