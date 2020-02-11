export interface Book {
  title: string;
  price: number;
}

export class Cart {
  private bookList: Book[] = [];

  getBookList() {
    return this.bookList;
  }

  addBook(book: Book) {
    this.bookList = [...this.bookList, book];
  }

  removeBook(book: Book) {
    this.bookList = this.bookList.filter(_book => book !== _book);
  }
}
