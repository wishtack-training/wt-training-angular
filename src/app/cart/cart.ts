export interface Book {
  title: string;
  price: number;
  pictureUri?: string;
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

  getTotalPrice() {
    return this.bookList
      .map(book => book.price)
      .reduce((acc, value) => acc + value, 0);
  }
}
