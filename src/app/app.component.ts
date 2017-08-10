import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Session } from './session/session';
import { Observable } from 'rxjs/Observable';
import { SessionState } from './session/session-state';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'wt-app',
    styleUrls: [
        './shared/shake.css'
    ],
    template: `
<header>
    <h1>WELCOME</h1>
    <h2 *ngIf="username$ | async as username">
        {{ username }}
        <button class="wt-logout" (click)="logOut()">LOG OUT</button>
    </h2>
</header>
<div *ngIf="username$ | async">
    <router-outlet></router-outlet>
</div>
<footer>
    <a [routerLink]="['/users']">User list</a>
    <a [routerLink]="['/help', 'tech', {mode: 'full'}]">Help Tech</a>
    <a [routerLink]="['/help', 'biz']">Help Biz</a>
</footer>

<form
        *ngIf="!(username$ | async)"
        [formGroup]="loginForm"
        (ngSubmit)="logIn()">
    
    <input type="text" formControlName="username">
    
</form>
    
`
})
export class AppComponent {

    loginForm = new FormGroup({
        username: new FormControl()
    });

    constructor(private _session: Session) {
    }

    get username$() {
        return this._session
            .state$
            .map((state) => state.username);
    }

    logIn() {
        this._session.logIn(this.loginForm.value);
    }

    logOut() {
        this._session.logOut();
    }
}
