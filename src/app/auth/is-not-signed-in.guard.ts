import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import { first, map } from 'rxjs/operators';
import { appRouteHelper } from '../app-routing/app.route-helper';
import { UserQuery } from '../user/user.query';

@Injectable({
  providedIn: 'root'
})
export class IsNotSignedInGuard implements CanActivate {
  constructor(private _router: Router, private _userQuery: UserQuery) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this._userQuery.isSignedIn$.pipe(
      map(isSignedIn => {
        if (!isSignedIn) {
          return true;
        }
        return this._router.createUrlTree(appRouteHelper.userProfileRoute());
      }),
      first()
    );
  }
}
