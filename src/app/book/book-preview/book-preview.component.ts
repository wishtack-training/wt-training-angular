import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Book } from '../book';


@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'wt-book-preview',
    templateUrl: './book-preview.component.html',
    styleUrls: ['./book-preview.component.scss']
})
export class BookPreviewComponent {

    @Input() book: Book;

    getBookPictureUrl() {

        if (this.book.pictureUrl != null) {
            return this.book.pictureUrl;
        }

        return `https://robohash.org/${this.book.title}`;

    }

}
