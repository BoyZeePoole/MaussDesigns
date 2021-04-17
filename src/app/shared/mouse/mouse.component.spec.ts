import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MouseComponent } from './mouse.component';

describe('MouseComponent', () => {
  let component: MouseComponent;
  let fixture: ComponentFixture<MouseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
