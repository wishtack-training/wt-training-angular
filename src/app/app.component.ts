import { Component } from '@angular/core';

@Component({
    selector: 'wt-app',
    templateUrl: './app.component.html'
})
export class AppComponent {

    name = 'Foo';

    constructor() {

        setInterval(() => {
            this.name += '.';
        }, 200);

    }

    reset() {
        this.name = '';
    }

    shouldShowResetButton() {
        return this.name.length > 10;
    }
}
