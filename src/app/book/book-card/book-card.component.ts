import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CartService } from '../../cart/cart.service';
import { Book } from '../book';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'wt-book-card',
    templateUrl: './book-card.component.html',
    styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent {

    @Input() book: Book;

    constructor(private _cart: CartService) {
    }

    buy() {
        this._cart.addBook(this.book);
    }

    getBookDescription() {
        console.log('getBookDescription');
        return 'Book description ...';
    }
}
