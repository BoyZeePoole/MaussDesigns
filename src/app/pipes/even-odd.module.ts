import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvenOddPipe } from './even-odd.pipe';
@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    EvenOddPipe
  ],
  exports: [EvenOddPipe],
  providers: [
  ]
})
export class EvenOddPipeModule {
  static forRoot(): ModuleWithProviders<EvenOddPipe> {
    return {
        ngModule: EvenOddPipe,
        providers: [],
    };
}
}