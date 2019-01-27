import { Component, OnInit } from '@angular/core';
import { ClientProfileService } from '../services/clientprofile.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.scss']
})
export class ClientProfileComponent implements OnInit {
  personForm: FormGroup;
  constructor(private fb: FormBuilder,
              private clientService : ClientProfileService) {
                this.createClientForm();
               }

  ngOnInit() {
  }
  save(formValues) : void {
    if (this.personForm.invalid) return;
   this.clientService.save(formValues)
   .subscribe(
    success => {
      //this.toasterService.pop('success', 'Success', "Person added");
      //this.router.navigate(['/people']);
    },
    error => {
      console.log(error);
      //this.errorMessage = error;
      //this.popToast('error', 'Error', this.errorService.displayError(error));
    });    
  }
  createClientForm() {
    this.personForm = this.fb.group({
      firstname: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.required]
    })    
 }
}
