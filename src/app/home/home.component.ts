import { Component, OnInit, OnChanges } from '@angular/core';
import { MenuRoutes } from '../services/settings';
import { Router, ActivatedRoute } from '@angular/router';
import { ApplicationSettings } from '../services/settings';
import { PubSubService } from '../services/pup-sub.service';
import { fader, slideInOutAnimation } from '../animations/index';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    fader,
    slideInOutAnimation
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
}