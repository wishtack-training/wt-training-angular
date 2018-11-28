import { Component } from '@angular/core';

@Component({
    selector: 'wt-demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.scss']
})
export class DemoComponent {

    selectedCity: string;
    cityList = [
        'Luxembourg',
        'Lyon'
    ];

    selectCity(city: string) {
        this.selectedCity = city;
    }

}
