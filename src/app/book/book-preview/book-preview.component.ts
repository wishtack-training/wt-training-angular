import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Book } from '../book';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'wt-book-preview',
    templateUrl: './book-preview.component.html',
    styleUrls: ['./book-preview.component.scss']
})
export class BookPreviewComponent implements OnChanges, OnInit {

    /**
     * The book to display.
     */
    @Input() book: Book;

    pictureUrl: string;

    constructor() {
    }

    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges) {

        if (changes.book != null) {
            this.pictureUrl = this._getPictureUrl(this.book);


        }

    }

    private _getPictureUrl(book: Book) {
        return `https://robohash.org/${encodeURIComponent(book.title)}?set=set4`;
    }


}
