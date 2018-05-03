import { Component } from '@angular/core';

@Component({
    selector: 'wt-app',
    templateUrl: './app.component.html'
})
export class AppComponent {

    userName = 'Foo';
    userNameList = [
        'Foo',
        'John',
        'Bar'
    ];

    constructor() {

        setInterval(() => {
            this.userName += '.';
        }, 1000);

    }

    getPictureUrl() {
        return 'https://robohash.org/' + this.userName;
    }

    resetUserName() {
        this.userName = '';
    }
}
