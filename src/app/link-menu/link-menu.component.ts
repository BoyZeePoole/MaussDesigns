import { Component, OnInit, Input } from '@angular/core';
import { PubSubService } from '../services/pup-sub.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-link-menu',
  templateUrl: './link-menu.component.html',
  styleUrls: ['./link-menu.component.scss']
})
export class LinkMenuComponent implements OnInit {
  routes;
  @Input() menuData: any;
  isLoggedIn: boolean = false;

  constructor(private pubsubService: PubSubService,
    private userService: UserService) {

    this.pubsubService.isLoggedIn.subscribe(
      data => {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.isLoggedIn = currentUser != null;//action;
        if (currentUser) {
          this.userService.getMenuByUserId(currentUser.id).subscribe(
            menu => {
              if (menu) {
                this.routes = menu;
              }
            });
        }
      });
  }

  ngOnInit() {
    this.routes = this.menuData;
  }

}
