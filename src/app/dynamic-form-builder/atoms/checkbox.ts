import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
    selector: 'checkbox',
    template: `
      <div [formGroup]="form">
        <div [formGroupName]="field.name" >
          <div *ngFor="let opt of field.options" class="form-check form-check">
          <!--<label class="form-check-label">
             <input [formControlName]="opt.key" class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
             {{opt.label}}
          </label>-->
          <mat-checkbox class="form-check-input" [formControlName]="opt.key"> {{opt.label}}</mat-checkbox>
          </div>
        </div>

      </div> 
    `
})
export class CheckBoxComponent {
    @Input() field:any = {};
    @Input() form:FormGroup;
    get isValid() { return this.form.controls[this.field.name].valid; }
    get isDirty() { return this.form.controls[this.field.name].dirty; }
}