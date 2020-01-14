import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderService } from '../../services/loader.service';
import { ResponsiveService } from '../../services/pup-sub.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  color = 'white';
  mode = 'indeterminate';
  value = 50;
  diameter = 60;
  isLoading: Subject<boolean> = this.loaderService.isLoading;
  constructor(private loaderService: LoaderService,
    private responsiveService: ResponsiveService) { }

  ngOnInit() {
    this.responsiveService.getMobileStatus().subscribe( isMobile =>{
      if(isMobile){
        this.diameter = 30;
      }
      else{
        this.diameter = 60;
      }
    });
    this.onResize();
  }
  onResize(){
    this.responsiveService.checkWidth();
  }

}
