import { Book, Cart } from './cart';

describe('Cart', () => {
  let cart: Cart;
  let rework: Book;
  let xpExplained: Book;

  beforeEach(() => {
    cart = new Cart();

    rework = {
      title: 'ReWork',
      price: 20
    };

    xpExplained = {
      title: 'eXtreme Programming Explained',
      price: 30
    };
  });

  it('should add books', () => {
    const emptyBookList = cart.getBookList();

    cart.addBook(rework);
    cart.addBook(xpExplained);

    const bookList = cart.getBookList();

    expect(emptyBookList).toEqual([]);

    expect(bookList).toEqual([rework, xpExplained]);
  });

  it('should remove books', () => {

    cart.addBook(rework);
    cart.addBook(xpExplained);

    cart.removeBook(rework);

    const bookList = cart.getBookList();

    expect(bookList).toEqual([xpExplained]);

  });

  xit('should get total price', () => {
  });
});
