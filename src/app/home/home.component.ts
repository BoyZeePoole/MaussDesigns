import { Component, OnInit, OnChanges } from '@angular/core';
import { MenuRoutes } from '../services/settings';
import { Router, ActivatedRoute } from '@angular/router';
import { ApplicationSettings } from '../services/settings';
import { PubSubService } from '../services/pup-sub.service';
import { fader, slideInOutAnimation } from '../animations/index';
import { trigger, transition, animate, style } from '@angular/animations'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    fader,
    slideInOutAnimation,
      trigger('slideInOut', [
        transition(':enter', [
          style({transform: 'translateY(-100%)'}),
          animate('200ms ease-in', style({transform: 'translateY(0%)'}))
        ]),
        transition(':leave', [
          animate('200ms ease-in', style({transform: 'translateY(-100%)'}))
        ])
      ])
    // animation triggers go here
  ]
})
export class HomeComponent implements OnInit, OnChanges{
  routes: any = MenuRoutes;
  app = ApplicationSettings;
  isHome = true;
  products: any;
  searchText: any;
  userName: string;
  groupId: any;
  showMenu: boolean = false;
  constructor(private router: Router,
              private route: ActivatedRoute,
              private pubsubService: PubSubService) { 
       
  }
  ngOnChanges() {
  }
  doSearch(search: string){
    this.pubsubService.setSearchString(search);
  }
  ngOnInit() {
    if(localStorage.currentUser != undefined){
      var user = JSON.parse(localStorage.currentUser);
      this.userName = user.firstName + ' ' + user.lastName;
    }
  }
  showmenu(){
    this.showMenu = !this.showMenu;
  }
}