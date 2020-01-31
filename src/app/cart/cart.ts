import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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

  addBook(book: Book) {
    this.bookList$.next([...this.bookList$.value, book]);
  }

  getBookList(): Book[] {
    throw new Error('🚧 work in progress!');
  }

  removeBook(book: Book) {
    throw new Error('🚧 work in progress!');
  }

  getTotalPrice(): number {
    throw new Error('🚧 work in progress!');
  }
}
