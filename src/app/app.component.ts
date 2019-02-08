import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { SessionQuery } from './auth/session.query';
import { bookRouteResolver } from './views/book-views/book-route-resolver';

@Component({
    selector: 'wt-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    bookRouteResolver = bookRouteResolver;
    isSignedIn$ = this._sessionQuery.isSignedIn$;

    constructor(
        private _authService: AuthService,
        private _sessionQuery: SessionQuery
    ) {
    }

    signOut() {
        this._authService.signOut();
    }

}
