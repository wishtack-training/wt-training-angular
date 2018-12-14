import { HttpTestingController } from '@angular/common/http/testing';
import { ChangeDetectorRef, Component } from '@angular/core';
import { SessionService } from './session/session.service';


@Component({
    selector: 'wt-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    isSignedIn$ = this._sessionService.isSignedIn$;

    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _sessionService: SessionService,
        private _httpTestingController: HttpTestingController) {
        window['changeDetectorRef'] = this._changeDetectorRef;
        window['httpTestingController'] = this._httpTestingController;
    }

    signIn() {
        this._sessionService.setUserId('USER_ID');
    }

    signOut() {
        this._sessionService.signOut();
    }

    flush() {
    }

}
