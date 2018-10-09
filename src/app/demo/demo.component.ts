import { Component } from '@angular/core';

@Component({
    selector: 'wt-demo',
    templateUrl: './demo.component.html'
})
export class DemoComponent {

    userName = 'Foo';

    cityList = [
        'Lyon',
        'Marseille',
        'Nice'
    ];

    constructor() {
        /* @HACK: Do not put this in constructor. */

        setInterval(() => {
            this.userName += '.';
        }, 1000);

    }

    reset() {
        this.userName = 'Foo';
    }

}
