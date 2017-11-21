import { Component } from '@angular/core';

@Component({
    selector: 'wt-app',
    templateUrl: './app.component.html'
})
export class AppComponent {

    name = 'Foo';

    constructor() {
        setInterval(() => this.name += '.', 100);
    }

    reset() {
        this.name = '.';
    }

}
