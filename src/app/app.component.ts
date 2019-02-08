import { Component } from '@angular/core';
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

    constructor(private _sessionQuery: SessionQuery) {
    }

}
