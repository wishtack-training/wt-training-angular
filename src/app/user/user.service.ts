import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { UserStore } from './user.store';

export interface TokenResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private _httpClient: HttpClient, private _userStore: UserStore) {}

  logIn({ email, password }: { email: string; password: string }) {
    return this._httpClient
      .post<TokenResponse>('https://todos.yjaaidi.now.sh/tokens', {
        email,
        password
      })
      .pipe(
        tap(({ token }) =>
          this._updateUser({
            email,
            token
          })
        )
      );
  }

  private _updateUser({ email, token }: { email: string; token: string }) {
    this._userStore.update({ email, token });
  }
}
