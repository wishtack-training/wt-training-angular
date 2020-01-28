export interface Book {
  title: string;
  price: number;
}

export function createBook(args: Book): Book {
  return {
    title: args.title,
    price: args.price
  };
}

export class Cart {
  private _books: Book[] = [];

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
