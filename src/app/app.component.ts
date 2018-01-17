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

    userList = [
        new User('Foo', 'BAR'),
        new User('John', 'DOE'),
    ];

    message: string;

    constructor() {

        this.message = 'Hello';

        setInterval(() => {
            this.message += '.';
        }, 1000);

    }

    reset() {
        this.message = '';
    }

}
