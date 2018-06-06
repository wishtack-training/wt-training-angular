import { Component } from '@angular/core';

@Component({
    selector: 'wt-app',
    templateUrl: './app.component.html'
})
export class AppComponent {

    message: string;
    userName = 'Foo';

    constructor() {
        this.resetMessage();
        setInterval(() => this.message += '.', 1000);
    }

    getPictureUrl() {
        return `https://robohash.org/${this.userName}`;
    }

    resetMessage() {
        this.message = 'Loading';
    }
}
