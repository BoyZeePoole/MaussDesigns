import { Component, Input, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'dynamic-form-builder',
  template:`
    <form *ngIf="form" (ngSubmit)="save()" [formGroup]="form" class="form-horizontal">
      <div *ngFor="let field of fields">
          <field-builder [field]="field" [form]="form"></field-builder>
      </div>
      <div class="form-row"></div>
      <div class="form-group row">
        <div></div>
        <div><br />
          <button class="Mauss-Button" mat-raised-button color="primary">{{buttonText}}</button>
        </div>
      </div>
    </form>
  `,
})
export class DynamicFormBuilderComponent implements OnChanges {
  @Output() onSubmit = new EventEmitter();
  @Input() fields: any[] = [];
  @Input() buttonText: string = 'Save';
  form: FormGroup;
  constructor() { }

  ngOnChanges() {
    let fieldsCtrls = {};
    for (let f of this.fields) {
      if (f.type != 'checkbox') {
        if(f.required){
          fieldsCtrls[f.name] = new FormControl(f.value || '', Validators.required);
        }
        else {
          fieldsCtrls[f.name] = new FormControl(f.value || '');
        }
      } else {
        let opts = {};
        for (let opt of f.options) {
          opts[opt.key] = new FormControl(opt.value);
        }
        fieldsCtrls[f.name] = new FormGroup(opts)
      }
    }
    this.form = new FormGroup(fieldsCtrls);
  }
  save(){
    // if(this.form.invalid) {
    //   this.validateAllFormFields(this.form);
    //   return;
    // };
    this.onSubmit.emit(this.form)
  }
  validateAllFormFields(formGroup: FormGroup) {         //{1}
  Object.keys(formGroup.controls).forEach(field => {  //{2}
    const control = formGroup.get(field);             //{3}
    if (control instanceof FormControl) {             //{4}
      control.markAsTouched({ onlySelf: true });
    } else if (control instanceof FormGroup) {        //{5}
      this.validateAllFormFields(control);            //{6}
    }
  });
}
}
