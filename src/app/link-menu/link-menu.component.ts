import { Component, ElementRef, Renderer2, OnInit, Input } from '@angular/core';
import { PubSubService } from '../services/pup-sub.service';
import { UserService } from '../services/user.service';
import { MenuRoutes } from '../services/settings';

@Component({
  selector: 'app-link-menu',
  templateUrl: './link-menu.component.html',
  styleUrls: ['./link-menu.component.scss']
})
export class LinkMenuComponent implements OnInit {
  routes: Menu[];
  newRoutes: any;
  @Input() menuData: any;
  isLoggedIn: boolean = false;

  constructor(private pubsubService: PubSubService,
    private userService: UserService,
    private renderer: Renderer2,
    private el: ElementRef) {
    this.init(this.isLoggedIn);
    this.pubsubService.isLoggedIn.subscribe(
      data => {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.isLoggedIn = currentUser != null;//action;
        if (currentUser) {
          this.userService.getMenuByUserId(currentUser.id).subscribe(
            menu => {
              if (menu) {
                this.routes = this.createMenuTree(menu);
              }
            });
        }
      });
  }

  ngOnInit() {
    this.routes = this.createMenuTree(this.menuData);
    this.pubsubService.isLoggedIn.subscribe(
      data => {
        this.init(data);
      });
  }
  init(action: boolean): void {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.isLoggedIn = currentUser != null;//action;
  }
  createMenuTree(menu: any) {
    let mainMenu: Item[] = menu.filter(
      item => {
        return item.parentId === null;
      });
      mainMenu.forEach(element => {
        element.showChildren = false;
      });
    let rootMenus: Menu[];
    rootMenus = [];
    mainMenu.forEach(element => {
      var rootMenu: Menu = {
        item: element,
        items: menu.filter(
          menuItem => {
            return menuItem.parentId === element.refId;
          })
      }
      rootMenus.push(rootMenu);
    });
    return rootMenus;
  }
  onEvent(event) {
    this.pubsubService.setGlobalMenu(true);
    event.stopPropagation();
 }
  menuToggle() {
    this.pubsubService.setGlobalMenu(true);    
  }

  doTree(box: Element){
    box.parentElement.querySelector(".nested").classList.toggle("active");
    box.querySelector(".icon-cheveron-right").classList.toggle("rotate-down");
  }

}


export interface Item {
  refId: number;
  icon: string;
  route: string;
  title: string;
  rightsId: number;
  sequence: number;
  active: boolean;
  subMenu: boolean;
  parentId?: number;
  showChildren: boolean;
}

export interface Menu {
  item: Item;
  items: Item[];
}
