import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropDownDirective } from './dropdown-input-directive';



@NgModule({
  declarations: [DropDownDirective],
  imports: [
    CommonModule,
  ],
  exports: [DropDownDirective]
})
export class DirectiveModule { }
