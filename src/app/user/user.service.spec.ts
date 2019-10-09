import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { UserQuery } from './user.query';
import { UserService } from './user.service';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
  });

  let httpTestingController: HttpTestingController;
  beforeEach(
    () => (httpTestingController = TestBed.get(HttpTestingController))
  );

  let userService: UserService;
  beforeEach(() => (userService = TestBed.get(UserService)));

  let userQuery: UserQuery;
  beforeEach(() => (userQuery = TestBed.get(UserQuery)));

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should log in and update token in store', () => {
    userService
      .logIn({ email: 'younes@wishtack.io', password: '123456' })
      .subscribe();

    const request = httpTestingController.expectOne({
      method: 'POST',
      url: 'https://todos.yjaaidi.now.sh/tokens'
    });

    expect(request.request.body).toEqual({
      email: 'younes@wishtack.io',
      password: '123456'
    });

    expect(userQuery.getValue()).toEqual({
      email: null,
      token: null
    });

    request.flush({
      token: 'TOKEN'
    });

    expect(userQuery.getValue()).toEqual({
      email: 'younes@wishtack.io',
      token: 'TOKEN'
    });
  });
});
