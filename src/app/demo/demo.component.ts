import { Component } from '@angular/core';

@Component({
    selector: 'wt-demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.css']
})
export class DemoComponent {

    userName = 'Foo';

    city: string;
    cityList = [
        'Dijon',
        'Grenoble',
        'Lyon'
    ];

    constructor() {
        // @HACK: Never do this... specially in the constructor...
        setInterval(() => {
            this.userName += '.';
        }, 1000);

    }

    canReset() {
        return this.userName.length < 5;
    }

    reset() {
        this.userName = '';
    }

    addCity() {
        this.cityList = [...this.cityList, this.city];
        this.city = null;
    }
}
