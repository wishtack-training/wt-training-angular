import { Component } from '@angular/core';

@Component({
    selector: 'wt-demo',
    templateUrl: './demo.component.html'
})
export class DemoComponent {

    name = 'Foo';

    constructor() {

        setInterval(() => {
            this.name += '.';
        }, 1000);

    }

    getPictureUrl() {

        if (this.name == null) {
            return null;
        }

        return `https://robohash.org/${this.name}`;

    }

    canReset() {
        return this.name.length > 5;
    }

    reset() {
        this.name = '';
    }

}
