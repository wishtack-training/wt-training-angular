import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { Observable } from 'rxjs';
import { UserState, UserStore } from './user.store';

function isSignedIn(state: UserState) {
  return state.email != null;
}

@Injectable({
  providedIn: 'root'
})
export class UserQuery extends Query<UserState> {
  email$ = this.select('email');
  isSignedIn$ = this.select(isSignedIn);
  pictureUri$: Observable<string>;

  constructor(protected store: UserStore) {
    super(store);

    this.pictureUri$ = this.select(state => {
      const email = state.email;
      if (email == null) {
        return null;
      }
      return `https://robohash.org/${encodeURIComponent(email)}?set=set4`;
    });
  }

  isSignedIn() {
    return isSignedIn(this.getValue());
  }
}
