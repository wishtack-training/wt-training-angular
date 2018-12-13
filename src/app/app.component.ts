import { Component } from '@angular/core';
import { SessionService } from './session/session.service';


@Component({
    selector: 'wt-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    isSignedIn$ = this._sessionService.isSignedIn$;

    constructor(private _sessionService: SessionService) {
    }

    signIn() {
        this._sessionService.setUserId('USER_ID');
    }

    signOut() {
        this._sessionService.signOut();
    }

}
