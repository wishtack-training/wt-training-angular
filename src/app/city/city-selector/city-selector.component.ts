import { Component } from '@angular/core';

@Component({
  selector: 'wt-city-selector',
  templateUrl: './city-selector.component.html',
  styleUrls: ['./city-selector.component.css']
})
export class CitySelectorComponent {

    cityList = [
        'Luxembourg',
        'Lyon'
    ];
    selectedCity: string;

    getCityTemperature(city: string) {
        return city.length * 3;
    }

    getCityPictureUrl(city) {

        if (city == null) {
            return null;
        }

        return `https://robohash.org/${city}?set=set4`;
    }

    selectCity(city: string) {
        this.selectedCity = city;
    }


}
