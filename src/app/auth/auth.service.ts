import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { SessionStore } from './session.store';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(
        private _sessionStore: SessionStore
    ) {
    }

    signIn({email, password}: { email: string; password: string; }): Observable<void> {

        /* @TODO: Implement an authentication API & authenticate. */

        this._sessionStore.reset();
        this._sessionStore.update({
            email,
            name: 'Foo BAR'
        });

        return EMPTY;

    }

}
