import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'wt-demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

    userName = 'Foo';

    ngOnInit() {

        setInterval(() => this.userName += '.', 500);

    }

    canReset() {
        return this.userName.length > 5;
    }

    reset() {
        this.userName = '';
    }

}
