/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

enum UserCurrentStatus {
    present = 'present',
    pause = 'pause',
    sleep = '💤'
}

class UserCurrentState {
    firstName?: string;
    lastName?: string;
    status = UserCurrentStatus.sleep;
}

class UserCurrentStore {

    private _state$ = new BehaviorSubject(new UserCurrentState());

    get state$() {
        return this._state$.asObservable();
    }

    getStateSnapshot() {
        return this._state$.getValue();
    }

    updateState(state: UserCurrentState) {
        state = Object.assign(this.getStateSnapshot(), state);
        this._state$.next(state);
    }

}


const userCurrentStore = new UserCurrentStore();

userCurrentStore.state$.subscribe(state => {
    console.log(state.status);
});


userCurrentStore.updateState({
    status: UserCurrentStatus.present
});

