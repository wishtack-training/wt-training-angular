import { Component } from '@angular/core';
import { User } from '../form-demo/form-demo.component';

@Component({
    selector: 'wt-demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.scss']
})
export class DemoComponent {

    cityList = [
        'Dijon',
        'Lyon'
    ];

    title = 'Hello!';

    constructor() {
        /* @hack Don't do this at home.  🤮. */
        setInterval(() => {
            this.title += '.';
        }, 200);
    }

    reset() {
        this.title = '';
    }

    logUser(user: User) {
        console.log(user);
    }

}
