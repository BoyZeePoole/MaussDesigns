import { Component, OnInit } from '@angular/core';
import { FormService } from '../services/form.service';
@Component({
  selector: 'app-login-register-container',
  templateUrl: './login-register-container.component.html',
  styleUrls: ['./login-register-container.component.scss']
})
export class LoginRegisterContainerComponent implements OnInit {

  constructor(private formService: FormService) { }
  fields : any[] = [];
  ngOnInit() {
    this.getFields();
  }

  getFields() {
    this.formService.GetFormByFormName('Login')
    .subscribe(
      data => {
        this.fields = data;
      }
    );
  }

}
