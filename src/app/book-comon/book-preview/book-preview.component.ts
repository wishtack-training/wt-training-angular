import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../book';

export enum PictureShape {
    Circle = 'circle',
    Square = 'square'
}

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'wt-book-preview',
    templateUrl: './book-preview.component.html',
    styleUrls: ['./book-preview.component.scss']
})
export class BookPreviewComponent {

    @Input() book: Book;
    @Input() canBuy = false;
    @Input() canRemove = false;
    @Input() isPictureDisplayed = true;
    @Input() pictureShape = PictureShape.Circle;
    @Output() bookBuy = new EventEmitter<void>();
    @Output() bookRemove = new EventEmitter<void>();

    PictureShape = PictureShape;

    buyBook() {
        this.bookBuy.emit();
    }

    removeBook() {
        this.bookRemove.emit();
    }

    getPictureUri() {
        const authorName = encodeURIComponent(this.book.authorName);
        return `https://robohash.org/${authorName}?set=set4`;
    }
}
