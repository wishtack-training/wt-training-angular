import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CityInfo } from './city-info';
import { Coolness } from './coolness.enum';

@Component({
    selector: 'wt-city-info-preview',
    templateUrl: './city-info-preview.component.html',
    styleUrls: ['./city-info-preview.component.scss']
})
export class CityInfoPreviewComponent {

    @Input() cityInfo: CityInfo;
    @Output() vote = new EventEmitter<Coolness>();

    Coolness = Coolness;

    setCoolness(coolness: Coolness) {
        this.vote.emit(coolness);
    }

}
