import { Component } from '@angular/core';

@Component({
    selector: 'wt-app',
    templateUrl: './app.component.html'
})
export class AppComponent {

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
