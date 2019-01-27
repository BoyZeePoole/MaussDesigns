import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRegisterContainerComponent } from './login-register-container.component';

describe('LoginRegisterContainerComponent', () => {
  let component: LoginRegisterContainerComponent;
  let fixture: ComponentFixture<LoginRegisterContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginRegisterContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginRegisterContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
