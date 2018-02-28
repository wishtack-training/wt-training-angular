import { Component } from '@angular/core';

@Component({
    selector: 'wt-demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.css']
})
export class DemoComponent {

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
