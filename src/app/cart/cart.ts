import { Injectable } from '@angular/core';
import { BehaviorSubject, fromEvent, Observable } from 'rxjs';
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

    /*
     * @hack this is just an illustration of how state can be synced with local storage.
     * Use a state management like Akita, NgRx & Ngxs solution instead.
     */
    this._loadFromLocalStorage();

    /* Sync with local storage. */
    this.bookList$.subscribe(bookList =>
      localStorage.setItem('books', JSON.stringify(bookList))
    );

    fromEvent(window, 'storage').subscribe(() => this._loadFromLocalStorage());
  }

  addBook(book: Book) {
    this._updateBookList([...this._bookList$.value, book]);
  }

  removeBook(book: Book) {
    this._updateBookList(this._bookList$.value.filter(_book => book !== _book));
  }

  private _loadFromLocalStorage() {
    this._bookList$.next(
      JSON.parse(localStorage.getItem('books') ?? null) ?? []
    );
  }

  private _updateBookList(books: Book[]) {
    this._bookList$.next(books);
  }
}
