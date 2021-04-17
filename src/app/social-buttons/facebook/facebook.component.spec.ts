import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FacebookComponent } from './facebook.component';

describe('FacebookComponent', () => {
  let component: FacebookComponent;
  let fixture: ComponentFixture<FacebookComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FacebookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
