interface Book {
  title: string;
  price: number;
}

class Cart {
  private bookList: Book[] = [];

  getBookList() {
    return this.bookList;
  }

  addBook(book: Book) {
    this.bookList.push(book);
  }
}

describe('Cart', () => {
  it('should add books', () => {
    const cart = new Cart();

    const rework = {
      title: 'ReWork',
      price: 20
    };

    const xpExplained = {
      title: 'eXtreme Programming Explained',
      price: 30
    };

    const emptyBookList = cart.getBookList();

    expect(emptyBookList).toEqual([]);

    cart.addBook(rework);
    cart.addBook(xpExplained);

    const bookList = cart.getBookList();

    expect(bookList).toEqual([rework, xpExplained]);
  });

  xit('should remove books', () => {
  });

  xit('should get total price', () => {
  });
});
