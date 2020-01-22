import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id.toString(),
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent implements OnInit {
  imageUrlArray = [
    "../../assets/banner/slider_images_1.png",
    "../../assets/banner/slider_images_2.png",
    "../../assets/banner/slider_images_3.png"
]; 
  constructor() { }
  
  ngOnInit() {
  }

}
