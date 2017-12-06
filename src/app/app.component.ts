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
        }, 300);

    }

    reset() {
        this.userName = '';
    }

}
