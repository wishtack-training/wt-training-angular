import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { Observable } from 'rxjs';
import { UserState, UserStore } from './user.store';

@Injectable({
  providedIn: 'root'
})
export class UserQuery extends Query<UserState> {
  email$ = this.select('email');
  isSignedIn$ = this.select(state => state.email != null);
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
}
