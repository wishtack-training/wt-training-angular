import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface SessionState {
    email: string;
    name: string;
    isPremium: boolean;
}

export function createInitialState(): SessionState {
    return {
        email: null,
        name: null,
        isPremium: null
    };
}

@Injectable({
    providedIn: 'root'
})
@StoreConfig({
    name: 'session',
    resettable: true
})
export class SessionStore extends Store<SessionState> {

    constructor() {
        super(createInitialState());
    }

}
