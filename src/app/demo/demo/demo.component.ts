import { Component } from '@angular/core';

@Component({
    selector: 'wt-demo',
    templateUrl: './demo.component.html'
})
export class DemoComponent {

    cityList = [
        'Luxembourg',
        'Lyon',
        'Paris'
    ];

    constructor() {

        // setInterval(() => {
        //     this.cityName += '.';
        // }, 500);

    }

    onCityClick(city: string) {
        console.log(`♥ ${city}`);
    }

    onCityDblclick(city: string) {
        console.log(`💩 ${city}`);
    }
}
