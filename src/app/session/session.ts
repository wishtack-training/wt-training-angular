/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { SessionState } from './session-state';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class Session {

    _state$ = new BehaviorSubject<SessionState>(new SessionState());

    get state$() {
        return this._state$.asObservable();
    }

    logIn({username}) {
        this._updateState({username});
    }

    logOut() {
        this._updateState({username: null});
    }

    _updateState(stateData) {

        const state = Object.assign(
            new SessionState(),
            this._state$.value,
            stateData
        );

        this._state$.next(state);

    }

}
