import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Session {
    token?: string;
    userId?: string;
}

@Injectable({
    providedIn: 'root'
})
export class SessionService {

    isSignedIn$: Observable<any>;
    session$: Observable<Session>;

    private _session$ = new BehaviorSubject<Session>({});

    constructor() {

        this.session$ = this._session$.asObservable();

        this.isSignedIn$ = this.session$
            .pipe(map(session => session.userId != null));

        /* @todo use APP_INITIALIZER. */
        this._loadSession();

    }

    setUserId(userId: string) {
        this._patchSesssion({
            userId
        });
    }

    signOut() {
        this._patchSesssion({
            token: null,
            userId: null
        });
    }

    private _patchSesssion(data: Session) {

        this._session$.next({
            ...this._session$.value,
            ...data
        });

        localStorage.setItem('session', JSON.stringify(this._session$.value));

    }

    private _loadSession() {

        const sessionString = localStorage.getItem('session');

        const sessionData = sessionString != null ? JSON.parse(sessionString) : {};

        this._session$.next(sessionData);

    }
}
