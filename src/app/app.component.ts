import { Component } from '@angular/core';
import { UserStore } from './user/user-store';

@Component({
    selector: 'wt-app',
    templateUrl: './app.component.html'
})
export class AppComponent {

    name = 'Foo';

    private _userStore = new UserStore();

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
