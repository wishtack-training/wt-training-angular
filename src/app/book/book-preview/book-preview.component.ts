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

    getAuthorPictureUrl(authorName: string) {

        console.count('getAuthorPictureUrl');

        if (authorName == null) {
            return null;
        }

        return `https://robohash.org/${authorName}`;

    }

}
