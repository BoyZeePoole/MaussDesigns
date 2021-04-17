import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HausComponent } from './haus.component';

describe('HausComponent', () => {
  let component: HausComponent;
  let fixture: ComponentFixture<HausComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HausComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HausComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
