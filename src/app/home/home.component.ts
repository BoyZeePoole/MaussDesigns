import { Component, OnInit, OnChanges } from '@angular/core';
import { MenuRoutes } from '../services/settings';
import { Router, ActivatedRoute } from '@angular/router';
import { ApplicationSettings } from '../services/settings';
import { PubSubService } from '../services/pup-sub.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnChanges{
  routes = MenuRoutes;
  app = ApplicationSettings;
  isHome = true;
  products: any;
  searchText: any;
  userName: string;
  groupId: any;
  constructor(private router: Router,
              private route: ActivatedRoute,
              private pubsubService: PubSubService) { 
      let currentUser = JSON.parse(localStorage.getItem('currentUser'));
      if(currentUser != null && currentUser.rights !== undefined && currentUser.rights.title != ''){
          this.routes = currentUser.rights;
      }
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