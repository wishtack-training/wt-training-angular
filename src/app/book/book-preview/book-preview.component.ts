import { Component, Input } from '@angular/core';
import { Book } from '../book';

@Component({
    selector: 'wt-book-preview',
    templateUrl: './book-preview.component.html',
    styleUrls: ['./book-preview.component.scss']
})
export class BookPreviewComponent {

    @Input() book: Book;

    getAuthorPictureUrl(authorName: string) {

        if (authorName == null) {
            return null;
        }

        return `https://robohash.org/${authorName}`;

    }

}
