import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { UserService } from '../user/user.service';
import { LoginComponent, LoginModule } from './login.component';

function getByDataRole(fixture: ComponentFixture<any>, dataRole: string) {
  return fixture.debugElement.query(
    By.css(`[data-role="${encodeURIComponent(dataRole)}"]`)
  );
}

function submit(form: DebugElement) {
  return form.triggerEventHandler('submit', {});
}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, LoginModule, RouterTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  let router: Router;
  beforeEach(() => (router = TestBed.get(Router)));

  let userService: UserService;
  beforeEach(() => (userService = TestBed.get(UserService)));

  it('should log in', () => {
    spyOn(router, 'navigate').and.returnValue(Promise.resolve(true));
    spyOn(userService, 'logIn').and.returnValue(of(null));

    component.loginForm.setValue({
      email: 'foobar@wishtack.io',
      password: '123456'
    });

    const loginForm = getByDataRole(fixture, 'login-form');

    submit(loginForm);

    expect(userService.logIn).toHaveBeenCalledTimes(1);
    expect(userService.logIn).toHaveBeenCalledWith({
      email: 'foobar@wishtack.io',
      password: '123456'
    });

    expect(router.navigate).toHaveBeenCalledWith(['/', 'user-profile']);
  });

  xit('🚧 should show error message', () => {});
});
