import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'wt-demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

    cityList = [
        'Lyon ☀️',
        'Paris 🌧',
        'Rennes'
    ];

    title = 'Welcome';
    city: string;

    ngOnInit() {
        setInterval(() => this.title += '.', 200);
    }

    isResetEnabled() {
        return this.title.length > 20;
    }

    addCity() {
        this.cityList = [...this.cityList, this.city];
    }
}
