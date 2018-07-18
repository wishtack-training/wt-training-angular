import { Component } from '@angular/core';

@Component({
    selector: 'wt-demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.css']
})
export class DemoComponent {

    appName = 'Wishtack';

    cityList = [
        'Luxembourg',
        'Lyon',
        'Nice'
    ];

    constructor() {

        setInterval(() => {
            this.appName += '.';
        }, 1000);

    }

    canResetAppName() {
        return this.appName.length > 10;
    }

    resetAppName() {
        this.appName = 'Wishtack';
    }

}
