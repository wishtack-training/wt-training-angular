import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'wt-demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

    name = 'Foo';
    cityList = [
        'Luxembourg',
        'Lyon'
    ];

    ngOnInit() {
        setInterval(() => this.name += '.', 1000);
    }

    reset() {
        this.name = 'Foo';
    }

}
