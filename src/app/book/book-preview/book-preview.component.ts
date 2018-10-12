import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { bookRouteResolver } from '../../views/book/book-route-resolver';
import { Book } from '../book';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'wt-book-preview',
    templateUrl: './book-preview.component.html',
    styleUrls: ['./book-preview.component.scss']
})
export class BookPreviewComponent {

    @Input() book: Book;

    bookRouteResolver = bookRouteResolver;

    getBookPictureUrl() {

        if (this.book.pictureUrl != null) {
            return this.book.pictureUrl;
        }

        return `https://robohash.org/${this.book.title}`;

    }

}
