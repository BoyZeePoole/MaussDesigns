import { Component, OnInit, Input } from '@angular/core';
import { Helper } from '../../services/helper';
import { Router } from "@angular/router";
import { PubSubService } from '../../services/pup-sub.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  
  @Input() gridData : any; 
  searchText: string;

  constructor(private router: Router, private pubsubService: PubSubService) { }

  ngOnInit() {
  }
  doSearch(search: string) {
    this.pubsubService.setSearchString(search);
  }
  getImage(item){
    if(item){
      return `${Helper.apiServerUrl()}StaticFiles/`+ item.imageName;
    }    
  }
  gotoDetail(url, id){
    this.router.navigate([url, id]);
  }
}


