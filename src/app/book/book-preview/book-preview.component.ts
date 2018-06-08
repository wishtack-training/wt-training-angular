import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Book } from '../book';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'wt-book-preview',
    templateUrl: './book-preview.component.html',
    styleUrls: ['./book-preview.component.scss']
})
export class BookPreviewComponent implements OnChanges {

    @Input() book: Book;
    price: number;

    ngOnChanges(changes: SimpleChanges) {
        if (changes.book != null) {
            this.price = this.book.title.length * 5;
        }
    }

}
