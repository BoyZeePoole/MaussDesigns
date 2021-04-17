import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SnowComponent } from './snow.component';

describe('SnowComponent', () => {
  let component: SnowComponent;
  let fixture: ComponentFixture<SnowComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SnowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
