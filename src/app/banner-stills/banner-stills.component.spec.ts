import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerStillsComponent } from './banner-stills.component';

describe('BannerStillsComponent', () => {
  let component: BannerStillsComponent;
  let fixture: ComponentFixture<BannerStillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerStillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerStillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
