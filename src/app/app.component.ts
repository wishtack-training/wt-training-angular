import { Component } from '@angular/core';
import { CityInfo } from './demo/demo.component';

@Component({
    selector: 'wt-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'training';

    logCityInfo(cityInfo: CityInfo) {
        console.log(cityInfo);
    }
}

