import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { retryBackoff } from 'backoff-rxjs';
import { timeout } from 'rxjs/operators';
import { GoogleVolumeList } from '../../book/google-volume-list';

@Component({
    selector: 'wt-demo',
    templateUrl: './demo.component.html'
})
export class DemoComponent implements OnInit {

    cityList = [
        'Luxembourg',
        'Lyon',
        'Paris'
    ];

    constructor(private _httpClient: HttpClient) {

        // setInterval(() => {
        //     this.cityName += '.';
        // }, 500);

    }

    ngOnInit() {

        const data$ = this._httpClient
            .get<GoogleVolumeList>('https://www.googleapis.com/books/v1/volumes?q=rework');

        data$
            .pipe(
                timeout(100),
                retryBackoff(100)
            )
            .subscribe((data) => {
                // data
            });


    }

    onCityClick(city: string) {
        console.log(`♥ ${city}`);
    }

    onCityDblclick(city: string) {
        console.log(`💩 ${city}`);
    }

    addCity(city: string) {
        this.cityList = [...this.cityList, city];
    }
}
