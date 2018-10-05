import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../session/auth.service';
import { Session } from '../session/session';
import { mealRouteResolver } from '../views/meal/meal-route-resolver';

@Component({
    selector: 'wt-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

    isHandset$: Observable<boolean> = this._breakpointObserver.observe(Breakpoints.Handset)
        .pipe(
            map(result => result.matches)
        );
    isSignedIn$: Observable<boolean>;
    mealRouteResolver = mealRouteResolver;

    constructor(
        private _authService: AuthService,
        private _breakpointObserver: BreakpointObserver,
        private _session: Session
    ) {
        this.isSignedIn$ = this._session.isSignedIn$;
    }

    signIn() {
        this._authService.signIn(/* Credentials. */);
    }

    signOut() {
        this._authService.signOut();
    }

}
