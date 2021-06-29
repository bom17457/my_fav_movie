import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginWithThemoviedbComponent } from './login-with-themoviedb.component';

describe('LoginWithThemoviedbComponent', () => {
  let component: LoginWithThemoviedbComponent;
  let fixture: ComponentFixture<LoginWithThemoviedbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginWithThemoviedbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginWithThemoviedbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
