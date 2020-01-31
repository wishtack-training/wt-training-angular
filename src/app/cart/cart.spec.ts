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

  async function getTotalPrice() {
    return cart.totalPrice$.pipe(first()).toPromise();
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

  it('should remove books', async () => {
    cart.addBook(extremeProgrammingExplained);
    cart.addBook(rework);

    cart.removeBook(extremeProgrammingExplained);
    expect(await getBookList()).toEqual([rework]);
  });

  it('should get total price', async () => {
    cart.addBook(extremeProgrammingExplained);
    cart.addBook(rework);

    expect(await getTotalPrice()).toEqual(50);
  });

  it('should get total price even if book has no price', async () => {
    cart.addBook(extremeProgrammingExplained);
    cart.addBook(rework);
    cart.addBook(
      createBook({
        title: 'test',
        price: undefined
      })
    );

    expect(await getTotalPrice()).toEqual(50);
  });
});
