import { Injectable } from '@angular/core';
import { Session } from './session';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private _session: Session) {
    }

    signIn() {
        this._session.update({
            userId: 'foobar'
        });
    }

    signOut() {
        this._session.update({
            userId: null
        });
    }

}
