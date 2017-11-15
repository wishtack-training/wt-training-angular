import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'wt-app',
    styleUrls: [
        './app.component.scss'
    ],
    templateUrl: './app.component.html'
})
export class AppComponent {

    name = 'Foo';
    private _userStore;

    constructor() {

        setInterval(() => this.name += '.', 3000);
    }

    reset() {
        this.name = '.';
    }

    getPictureUrl() {
        return `https://robohash.org/${this.name}`;
    }

}
