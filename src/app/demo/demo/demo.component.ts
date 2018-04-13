import { Component } from '@angular/core';

@Component({
    selector: 'wt-demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.scss']
})
export class DemoComponent {

    name = 'test';

    constructor() {
        setInterval(() => {
            this.name += '.';
        }, 1000);
    }

    getPictureUrl() {
        return `https://robohash.org/${this.name}`;
    }

    resetName() {
        this.name = '';
    }

}
