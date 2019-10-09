import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserQuery } from '../user/user.query';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {
  constructor(private _userQuery: UserQuery) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = this._tryAddAuthorizationHeader(req);

    return next.handle(req);
  }

  private _tryAddAuthorizationHeader(req) {
    if (!req.url.startsWith('https://todos.yjaaidi.now.sh/')) {
      return req;
    }

    const token = this._userQuery.getValue().token;

    return req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }
}
