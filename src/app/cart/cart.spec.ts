import { first, tap } from 'rxjs/operators';
import { TestScheduler } from 'rxjs/testing';
import { Book, Cart, createBook } from './cart';

describe('Cart', () => {
  const testScheduler = new TestScheduler((actual, expected) => {
    expect(actual).toEqual(expected);
  });
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

  async function getBookList() {
    return cart.bookList$.pipe(first()).toPromise();
  }

  it('should add books', async () => {
    const emptyBookList = await getBookList();

    cart.addBook(extremeProgrammingExplained);
    cart.addBook(rework);

    expect(emptyBookList).toEqual([]);
    expect(await getBookList()).toEqual([extremeProgrammingExplained, rework]);
  });

  it('🎱 should add books', () => {
    testScheduler.run(({cold, expectObservable}) => {
      const books = {
        a: extremeProgrammingExplained,
        b: rework
      };

      const bookLists = {
        x: [],
        y: [extremeProgrammingExplained],
        z: [extremeProgrammingExplained, rework]
      };

      const sourceTemplate = '--a--b---';
      const expected = '      x-y--z---';

      const source = cold(sourceTemplate, books).pipe(
        tap(book => cart.addBook(book))
      );

      expectObservable(source).toBe(sourceTemplate, books);
      expectObservable(cart.bookList$).toBe(expected, bookLists);
    });
  });

  xit('should remove books', () => {
    cart.addBook(extremeProgrammingExplained);
    cart.addBook(rework);

    cart.removeBook(extremeProgrammingExplained);
    expect(cart.getBookList()).toEqual([rework]);
  });

  xit('should get total price', () => {
    cart.addBook(extremeProgrammingExplained);
    cart.addBook(rework);

    expect(cart.getTotalPrice()).toEqual(50);
  });

  xit('should get total price even if book has no price', () => {
    cart.addBook(extremeProgrammingExplained);
    cart.addBook(rework);
    cart.addBook(
      createBook({
        title: 'test',
        price: undefined
      })
    );

    expect(cart.getTotalPrice()).toEqual(50);
  });
});
