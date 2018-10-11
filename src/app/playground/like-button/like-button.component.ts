import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'wt-like-button',
    templateUrl: './like-button.component.html',
    styleUrls: ['./like-button.component.css']
})
export class LikeButtonComponent {

    @Input() score: number;
    @Output() scoreChange = new EventEmitter<number>();

    like() {
        const score = this.score + 1;
        this.scoreChange.emit(score);
    }

}
