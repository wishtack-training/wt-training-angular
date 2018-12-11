import { Component } from '@angular/core';

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
}
