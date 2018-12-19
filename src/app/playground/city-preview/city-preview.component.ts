import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'wt-city-preview',
    templateUrl: './city-preview.component.html',
    styleUrls: ['./city-preview.component.scss']
})
export class CityPreviewComponent {

    @Input() city: string;
    @Output() cityVote = new EventEmitter<number>();

    getPictureUri() {
        return `https://robohash.org/${encodeURIComponent(this.city)}`;
    }

    like() {
        this.cityVote.emit(5);
    }

    dislike() {
        this.cityVote.emit(0);
    }

}
