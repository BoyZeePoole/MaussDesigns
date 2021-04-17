import { Component, OnInit } from '@angular/core';
import { SubscribeService } from '../services/subscribe.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent implements OnInit {
  subscribeForm: FormGroup;
  submitted = false;
  constructor(private subscribeService: SubscribeService,
              public snackBar: MatSnackBar,
              private fb: FormBuilder
              ) {
                this.createForm();
               }

  ngOnInit() {
  }
  createForm() {
    this.subscribeForm = this.fb.group({
      email: ['', Validators.required],
      consent: []
    })    
  }

  get f() { return this.subscribeForm.controls; }

  save(value) {
    this.submitted = true;
    if (this.subscribeForm.invalid) return;
    this.subscribeForm.controls['consent'].setValue(value);
    this.subscribeService.save(this.subscribeForm.value)
   .subscribe(
    success => {
      let message = value ? 'Subscription successful' : 'Successfully un-subscribed'
      this.snackBar.open(message, null, {
        duration: 2000,
      });
    },
    error => {
      this.snackBar.open('An error occured ' + error, null, {
        duration: 2000,
      });
    });

  }
}
