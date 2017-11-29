import { Component } from '@angular/core';
import { User } from './user/user';


@Component({
    selector: 'wt-app',
    styleUrls: [
        './app.component.css'
    ],
    templateUrl: './app.component.html'
})
export class AppComponent {

    name = 'Foo';

    userList = [
        new User('Foo', 'BAR'),
        new User('John', 'DOE')
    ];

    private _interval;

    start() {

        if (this._interval != null) {
            return;
        }

        this._interval = setInterval(() => {
            this.name += '.';
        }, 500);

    }

    stop() {

        if (this._interval != null) {
            clearInterval(this._interval);
            this._interval = null;
        }

    }

    isStarted() {
        return this._interval != null;
    }
}
