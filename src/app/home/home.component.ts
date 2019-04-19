import { Component, OnInit, OnChanges } from '@angular/core';
import { MenuRoutes } from '../services/settings';
import { Router, ActivatedRoute } from '@angular/router';
import { ApplicationSettings } from '../services/settings';


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
              private route: ActivatedRoute) { 

      let currentUser = JSON.parse(localStorage.getItem('currentUser'));
      if(currentUser != null && currentUser.rights !== undefined && currentUser.rights.title != ''){
          this.routes = currentUser.rights;
      }
  }
  ngOnChanges() {
    // this.getAllProducts();
  }
  ngOnInit() {
    if(localStorage.currentUser != undefined){
      var user = JSON.parse(localStorage.currentUser);
      this.userName = user.firstName + ' ' + user.lastName;
    }
  }
}