import { Injectable } from '@angular/core';

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
  private _books: Book[] = [
    createBook({
      title: 'ReWork',
      price: 12
    })
  ];

  addBook(book: Book) {
    this._books = [...this._books, book];
  }

  getBookList() {
    return this._books;
  }

  removeBook(book: Book) {
    this._books = this._books.filter(_book => {
      return _book !== book;
    });
  }

  getTotalPrice() {
    return this._books
      .map(book => book.price)
      .reduce((acc, price) => acc + price, 0);
  }
}
