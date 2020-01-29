import { Component, Input } from '@angular/core';
import { Book } from '../cart/cart';

@Component({
  selector: 'mc-book-carousel',
  templateUrl: './book-carousel.component.html',
  styleUrls: ['./book-carousel.component.css']
})
export class BookCarouselComponent {

  @Input() books: Book[];

  selectedBook: Book;

  goToPrevious() {
    const index = this._getSelectedBookIndex();
    if (index === -1) {
      return;
    }
    this.selectedBook = this.books[index - 1];
  }

  goToNext() {
    const index = this._getSelectedBookIndex();
    /* @hack: if no book is selected, index is -1 so we will select the first one.
     * This is very ugly but fun. */
    this.selectedBook = this.books[index + 1];
  }

  canGoToNext() {
    return this.selectedBook !== this.books[this.books.length - 1];
  }

  canGoToPrevious() {
    return this._getSelectedBookIndex() > 0;
  }

  private _getSelectedBookIndex() {
    return this.books.indexOf(this.selectedBook);
  }
}
