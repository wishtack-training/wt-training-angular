/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

'use strict';

export class RatingComponent {

    constructor() {
        this.rating = null;
    }

    like() {
        this.onRatingChange({
            rating: this.rating + 1
        });
    }

    dislike() {
        this.onRatingChange({
            rating: 0
        });
    }

}

RatingComponent.config = {
    bindings: {
        rating: '<',
        onRatingChange: '&'
    },
    controller: RatingComponent,
    template: `
    <div>
        <span>{{ $ctrl.rating }}</span>
        <button ng-click="$ctrl.like()">👍</button>
        <button ng-click="$ctrl.dislike()">💩</button>
    </div>
    `
};