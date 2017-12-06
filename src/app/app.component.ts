import { Component } from '@angular/core';
import { User } from './user/user';

@Component({
    selector: 'wt-app',
    templateUrl: './app.component.html'
})
export class AppComponent {

    userName = 'Foo';

    userList = [
        new User('Foo', 'BAR'),
        new User('John', 'DOE')
    ];

    constructor() {

        setInterval(() => {
            this.userName += '.';
        }, 300);

    }

    reset() {
        this.userName = '';
    }

}
