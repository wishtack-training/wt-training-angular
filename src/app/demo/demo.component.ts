import { Component } from '@angular/core';

@Component({
    selector: 'wt-demo',
    template: `

        <ul>
            <li *ngFor="let city of cityList; let isLast = last">
                <span>{{ city }}</span>
                <button
                    (click)="onCityClick(city)"
                    (dblclick)="onCityDblclick(city)">Select
                </button>
                <hr *ngIf="!isLast">
            </li>
        </ul>

        <!--<button [hidden]="cityName.length % 2 === 0">RESET</button>-->

    `
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
