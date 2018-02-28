import { Component } from '@angular/core';

@Component({
    selector: 'wt-app',
    templateUrl: './app.component.html'
})
export class AppComponent {

    userName = 'Foo';

    constructor() {
        setInterval(() => {
            this.userName += '.';
        }, 1000);
    }

    reset() {
        this.userName = '';
    }

    shouldShowGreetings() {
        return this._isUserNameTooLong();
    }

    shouldShowReset() {
        return this._isUserNameTooLong();
    }

    private _isUserNameTooLong() {
        return this.userName.length > 10;
    }

}
