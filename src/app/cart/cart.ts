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
  bookList$: Observable<Book[]>;
  totalPrice$: Observable<number>;

  private _bookList$ = new BehaviorSubject<Book[]>([]);

  constructor() {

    this.bookList$ = this._bookList$.asObservable();

    this.totalPrice$ = this._bookList$.pipe(
      map(books => {
        return books
          .map(book => book.price)
          .filter(price => price != null)
          .reduce((acc, price) => acc + price, 0);
      })
    );

  }

  addBook(book: Book) {
    this._updateBookList([...this._bookList$.value, book]);
  }

  removeBook(book: Book) {
    this._updateBookList(this._bookList$.value.filter(_book => book !== _book));
  }

  private _updateBookList(books: Book[]) {
    this._bookList$.next(books);
  }
}




