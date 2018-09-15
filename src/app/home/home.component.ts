import { Component, OnInit } from '@angular/core';
import { MenuRoutes, ApplicationSettings } from '../services/settings';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
    routes = MenuRoutes;
    app = ApplicationSettings;
  ngOnInit() {
  }

}
