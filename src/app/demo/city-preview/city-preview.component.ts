import { Component, Input } from '@angular/core';

@Component({
    selector: 'wt-city-preview',
    templateUrl: './city-preview.component.html',
    styleUrls: ['./city-preview.component.scss']
})
export class CityPreviewComponent {

    @Input() city: string;

}
