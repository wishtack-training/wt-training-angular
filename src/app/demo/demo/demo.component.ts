import { Component, OnInit } from '@angular/core';
import { CityRepository } from '../city-repository.service';

@Component({
    selector: 'wt-demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

    selectedCity: string;
    cityList: string[];

    constructor(private _cityRepository: CityRepository) {
    }

    ngOnInit() {
        this.cityList = this._cityRepository.getCityList();
    }

    selectCity(city: string) {
        this.selectedCity = city;
    }

}
