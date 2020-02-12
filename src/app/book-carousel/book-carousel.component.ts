import { Component, OnInit } from '@angular/core';
import { Book } from './../cart/cart';

@Component({
  selector: 'ag-book-carousel',
  templateUrl: './book-carousel.component.html',
  styleUrls: ['./book-carousel.component.css']
})
export class BookCarouselComponent implements OnInit {

  selectedBook: Book;

  books: Book[] = [
    {
      title: 'Rework',
      price: 20,
      pictureUri: 'https://images-na.ssl-images-amazon.com/images/I/71SqvmjaM3L.jpg'
    },
    {
      title: 'eXtreme Programming Explained',
      price: 30,
      pictureUri: 'https://images-eu.ssl-images-amazon.com/images/I/51iupjtHU%2BL._SX260_.jpg'
    },
    {
      title: 'Lean Startup',
      price: 25,
      pictureUri: 'https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg'
    }
  ];

  ngOnInit(): void {
    this.selectedBook = this.books[0];
  }

  goToNext() {
    const index = this._getSelectedBookIndex();
    this.selectedBook = this.books[index + 1];
  }

  goToPrevious() {
    const index = this._getSelectedBookIndex();
    this.selectedBook = this.books[index - 1];
  }

  isFirst() {
    return this._getSelectedBookIndex() === 0;
  }

  isLast() {
    return this._getSelectedBookIndex() === this.books.length - 1;
  }

  selectBook(book: Book) {
    this.selectedBook = book;
  }

  private _getSelectedBookIndex() {
    return this.books.indexOf(this.selectedBook);
  }
}
