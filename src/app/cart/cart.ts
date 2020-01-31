import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Book {
  title: string;
  pictureUri?: string;
  price: number;
}

export function createBook(args: Book): Book {
  return {
    title: args.title,
    pictureUri: args.pictureUri,
    price: args.price
  };
}

@Injectable({
  providedIn: 'root'
})
export class Cart {
  bookList$ = new BehaviorSubject<Book[]>([]);
  totalPrice$: Observable<number>;

  constructor() {
    this.totalPrice$ = this.bookList$.pipe(
      map(books => {
        return books
          .map(book => book.price)
          .filter(price => price != null)
          .reduce((acc, price) => acc + price, 0);
      })
    );
  }

  addBook(book: Book) {
    this._updateBookList([...this.bookList$.value, book]);
  }

  getBookList(): Book[] {
    throw new Error('🚧 work in progress!');
  }

  removeBook(book: Book) {
    this._updateBookList(this.bookList$.value.filter(_book => book !== _book));
  }

  getTotalPrice(): number {
    throw new Error('🚧 work in progress!');
  }

  private _updateBookList(books: Book[]) {
    this.bookList$.next(books);
  }
}
