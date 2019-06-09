import { Component, OnInit } from '@angular/core';
import { PubSubService } from '../services/pup-sub.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {
  isLoggedIn : boolean = true;
  userName : string;
  constructor(private pubsubService: PubSubService) { 
    this.init(this.isLoggedIn);
  }

  ngOnInit() {
    // Here we wanna register a listener... typothing
    this.pubsubService.isLoggedIn.subscribe(
      data => {
        this.init(data);    
      });
  }
  init(action: boolean) : void{
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.isLoggedIn = action;
    if (currentUser) {      
      this.userName = currentUser.firstName + ' ' + currentUser.lastName;
    }
  }

}
