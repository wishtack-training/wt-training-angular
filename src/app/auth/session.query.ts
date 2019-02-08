import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { SessionState, SessionStore } from './session.store';

@Injectable({
    providedIn: 'root'
})
export class SessionQuery extends Query<SessionState> {

    /* @TODO: Use user id instead of email to know if user is signed in. */
    isSignedIn$ = this.select(state => state.email != null);
    userName$ = this.select(state => state.name);

    constructor(protected store: SessionStore) {
        super(store);
    }

}
