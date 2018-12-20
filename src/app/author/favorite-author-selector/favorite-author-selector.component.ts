import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'wt-favorite-author-selector',
    templateUrl: './favorite-author-selector.component.html',
    styleUrls: ['./favorite-author-selector.component.scss']
})
export class FavoriteAuthorSelectorComponent {

    @Output() authorSelect = new EventEmitter();

    favoriteAuthorList = [
        {
            name: 'Kent Beck'
        },
        {
            name: 'Jason F.'
        }
    ];

}
