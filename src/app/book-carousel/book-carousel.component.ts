import { Component } from '@angular/core';
import { Book, createBook } from '../cart/cart';

@Component({
  selector: 'mc-book-carousel',
  templateUrl: './book-carousel.component.html',
  styleUrls: ['./book-carousel.component.css']
})
export class BookCarouselComponent {

  books = [
    createBook({
      title: 'XP',
      price: 20
    }),
    createBook({
      title: 'ReWork',
      price: 30
    }),
    createBook({
      title: 'Lean Startup',
      price: 10
    }),
  ];

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
