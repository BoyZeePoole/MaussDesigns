import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { Subscription } from 'rxjs';

import { AlertService } from '../services/alert.service';

@Component({
    selector: 'app-alert',
    templateUrl: 'alert.component.html'
})

export class AlertComponent implements OnInit, OnDestroy, OnChanges {
    private subscription: Subscription;
    message: any;

    constructor(private alertService: AlertService) { }

    ngOnInit() {
        this.subscription = this.alertService.getMessage().subscribe(message => { 
            this.message = message; 
        });
    }
    ngOnChanges(){
        this.subscription = this.alertService.getMessage().subscribe(message => { 
            this.message = message; 
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}