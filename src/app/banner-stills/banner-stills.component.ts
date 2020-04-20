import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banner-stills',
  templateUrl: './banner-stills.component.html',
  styleUrls: ['./banner-stills.component.scss']
})
export class BannerStillsComponent implements OnInit {
  selectedBanner: string = '';
  banners: string[] = [
    '/assets/banner/Banner_1_final.jpg',
    '/assets/banner/Banner_2_final.jpg',
    '/assets/banner/Banner_3_final.jpg',
    '/assets/banner/Banner_4_final.jpg',
    '/assets/banner/Banner_5_final.jpg',
  ];

  @Input() half: boolean = false;
  constructor() { }

  ngOnInit(): void {
    this.selectedBanner = this.getRandomBanner();
  }
  getRandomBanner(): string {
    let max = this.banners.length;
    let rndNumber = Math.floor(Math.random() * Math.floor(max));
    return this.banners[rndNumber];
  }



}
