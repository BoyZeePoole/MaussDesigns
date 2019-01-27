import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { EntityService } from '../services/entity.service';
import { GroupService } from '../services/group.service';
import { Group } from '../models';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  pageProperties : any
  constructor(private location: Location,
              private entityService: EntityService,
              private groupService: GroupService) { }
  myURL: any;
  pageTitle: string = "";
  pageContent: string;
  categories: Group[] = [];
  ngOnInit() {
   //this.myURL = location.hash.replace(/\/[0-9]/, '');
   this.myURL = location.hash.replace(/#/, '');
    this.entityService.GetEntityByPageName(this.myURL)
    .subscribe(
      data => {
        this.pageProperties = data;
        this.pageTitle = this.getPageProperty('title').entityDescription;
        this.pageContent = this.getPageProperty('content').entityDescription;
      },
      error => {
        console.log(error);
      }
    );
    this.groupService.getAll()
    .subscribe(
      data => {
        this.categories = data;
      }
    );

  }

  getPageProperty(entity : string){ 
    if(this.pageProperties === undefined) return;
     return this.pageProperties.components.find((thing) => {
        return thing.entity === entity;
     })
  }


}
