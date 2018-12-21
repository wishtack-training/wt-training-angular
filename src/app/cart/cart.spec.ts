import { Book } from '../book-comon/book';
import { CartService } from './cart.service';

describe('BookStore', () => {

    let bookStore: CartService;

    let book1: Book;
    let book2: Book;
    let book3: Book;

    beforeEach(() => {

        bookStore = new CartService();

        book1 = new Book('eXtreme Programming Explained', 'Kent Beck');
        book2 = new Book('ReWork', 'Jason Fried');
        book3 = new Book('eXtreme Programming Explained', 'Kent Beck');

    });

    it('should add books', () => {

        const bookListEmpty = bookStore.getBookList();

        bookStore.addBook(book1);
        bookStore.addBook(book2);
        bookStore.addBook(book3);

        const bookList = bookStore.getBookList();

        /* Checking immutability. */
        expect(bookListEmpty).toEqual([]);

        /* Checking that reference doesn't keep changing. */
        expect(bookStore.getBookList()).toBe(bookList);

        expect(bookList).toEqual([
            book1,
            book2,
            book3
        ]);

    });

    it('should remove books', () => {


        bookStore.addBook(book1);
        bookStore.addBook(book2);
        bookStore.addBook(book3);

        bookStore.removeBook(book1);

        const bookList = bookStore.getBookList();

        expect(bookList).toEqual([
            book2,
            book3
        ]);

    });

});
