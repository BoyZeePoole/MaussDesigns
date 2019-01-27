import { Component, OnInit, Input } from '@angular/core';
import { ApplicationSettings } from '../services/settings';

@Component({
  selector: 'app-link-menu',
  templateUrl: './link-menu.component.html',
  styleUrls: ['./link-menu.component.scss']
})
export class LinkMenuComponent implements OnInit {
  routes;
  app = ApplicationSettings;
  @Input() menuData : any; 
  

  ngOnInit() {
    this.routes = this.menuData;
  }
  
}
