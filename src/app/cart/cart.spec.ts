import { Book, Cart, createBook } from './cart';

describe('Cart', () => {
  let cart: Cart;
  let extremeProgrammingExplained: Book;
  let rework: Book;

  beforeEach(() => {
    cart = new Cart();

    extremeProgrammingExplained = createBook({
      title: 'eXtreme Programming Explained',
      price: 20
    });

    rework = createBook({
      title: 'Rework',
      price: 30
    });
  });

  it('should add books', () => {
    const emptyBookList = cart.getBookList();

    cart.addBook(extremeProgrammingExplained);
    cart.addBook(rework);

    expect(emptyBookList).toEqual([]);
    expect(cart.getBookList()).toEqual([extremeProgrammingExplained, rework]);
  });

  it('should remove books', () => {
    cart.addBook(extremeProgrammingExplained);
    cart.addBook(rework);

    cart.removeBook(extremeProgrammingExplained);
    expect(cart.getBookList()).toEqual([rework]);
  });

  it('should get total price', () => {
    cart.addBook(extremeProgrammingExplained);
    cart.addBook(rework);

    expect(cart.getTotalPrice()).toEqual(50);
  });

  it('should get total price even if book has no price', () => {
    cart.addBook(extremeProgrammingExplained);
    cart.addBook(rework);
    cart.addBook(createBook({
      title: 'test',
      price: undefined
    }));

    expect(cart.getTotalPrice()).toEqual(50);

  });

});
