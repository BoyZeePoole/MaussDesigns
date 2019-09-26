import { Component, OnInit, OnChanges, Renderer2, OnDestroy } from '@angular/core';
import { MenuRoutes } from '../services/settings';
import { Router, ActivatedRoute } from '@angular/router';
import { ApplicationSettings } from '../services/settings';
import { PubSubService } from '../services/pup-sub.service';
import { fader, slideInOutAnimation } from '../animations/index';
import { trigger, transition, animate, style } from '@angular/animations'
import { ConnectionService } from 'ng-connection-service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    fader,
    slideInOutAnimation,
    trigger('slidedownUp', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate('200ms ease-in', style({ transform: 'translateY(0%)' }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ transform: 'translateY(-100%)' }))
      ])
    ])
    // animation triggers go here
  ]
})
export class HomeComponent implements OnInit, OnChanges {
  routes: any = MenuRoutes;
  app = ApplicationSettings;
  isHome = true;
  products: any;
  searchText: any;
  userName: string;
  groupId: any;
  showMenu: boolean = false;
  status = 'ONLINE'; //initializing as online by default
  isConnected = true;
  constructor(private router: Router,
    private connectionService: ConnectionService,
    private route: ActivatedRoute,
    private pubsubService: PubSubService,
    private renderer: Renderer2,
  ) {
    this.connectionService.monitor().subscribe(isConnected => {
      this.isConnected = isConnected;
      if (this.isConnected) {
        this.status = "ONLINE";
      } else {
        this.status = "OFFLINE"
      }
    });

  }
  ngOnChanges() {
  }
  doSearch(search: string) {
    this.pubsubService.setSearchString(search);
  }
  ngOnInit() {
    if (localStorage.currentUser != undefined) {
      var user = JSON.parse(localStorage.currentUser);
      this.userName = user.firstName + ' ' + user.lastName;
    }
  }
  showmenu() {
    this.showMenu = !this.showMenu;
    if (this.showMenu) {
      this.renderer.setStyle(document.body, 'overflow', 'hidden ');
    }
    else {
      this.renderer.removeStyle(document.body, "overflow");
    }
  }
  onActivate(event) {
    if (event.constructor.name != "DashboardComponent") { // for example
      let scrollToTop = window.setInterval(() => {
        let pos = window.pageYOffset;
        if (pos > 0) {
          window.scrollTo(0, pos - 50); // how far to scroll on each step
        } else {
          window.clearInterval(scrollToTop);
        }
      }, 16);
    }

  }
}