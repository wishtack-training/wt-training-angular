import { Cart, createBook } from './cart';

describe('Cart', () => {

  it('should add books', () => {
    const cart = new Cart();

    const extremeProgrammingExplained = createBook({
      title: 'eXtreme Programming Explained',
      price: 20
    });

    const rework = createBook({
      title: 'Rework',
      price: 30
    });

    const emptyBookList = cart.getBookList();

    cart.addBook(extremeProgrammingExplained);
    cart.addBook(rework);

    expect(emptyBookList).toEqual([]);
    expect(cart.getBookList()).toEqual([extremeProgrammingExplained, rework]);
  });

  xit('should remove books', () => {
  });

  xit('should get total price', () => {
  });
});
