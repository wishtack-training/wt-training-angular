import { Component } from '@angular/core';

@Component({
    selector: 'wt-demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.css']
})
export class DemoComponent {

    title = 'Foo';
    cityList = [
        'Lyon',
        'Paris'
    ];

    constructor() {
        /* This is bad 😱. */
        setInterval(() => this.title += '.', 1000);
    }

    getPictureUri() {

        if (this.title == null) {
            return null;
        }

        return `https://robohash.org/${this.title}`;

    }

}
