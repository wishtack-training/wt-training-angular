import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'wt-city-preview',
    templateUrl: './city-preview.component.html',
    styleUrls: ['./city-preview.component.scss']
})
export class CityPreviewComponent {

    @Input() city: string;
    @Output() citySelect = new EventEmitter<string>();

    selectCity() {
        this.citySelect.emit(this.city);
    }

}
