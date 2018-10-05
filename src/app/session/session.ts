/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

export interface SessionState {
    userId: string;
}

@Injectable({
    providedIn: 'root'
})
export class Session {

    private _sessionState$ = new BehaviorSubject<SessionState>({
        userId: null
    });

    constructor() {
        /* @TODO: Cf Angular APP_INITIALIZER. */
        this._loadLocalStorage();

    }

    get state$() {
        return this._sessionState$;
    }

    get isSignedIn$() {
        return this.state$.pipe(map(state => state.userId != null));
    }

    getStateSnapshot() {
        return this._sessionState$.value;
    }

    update(sessionState: SessionState) {

        const mergedSessionState = {
            ...this.getStateSnapshot(),
            ...sessionState
        };

        this._sessionState$.next(mergedSessionState);

        localStorage.setItem('session.v1', JSON.stringify(mergedSessionState));

    }

    private _loadLocalStorage() {

        const sessionDataString = localStorage.getItem('session.v1');

        if (sessionDataString == null) {
            return;
        }

        const sessionState = JSON.parse(sessionDataString);

        // if (sessionState.expirationDate ....) {
        //     ... clear
        // }

        this._sessionState$.next(sessionState);

    }

}
