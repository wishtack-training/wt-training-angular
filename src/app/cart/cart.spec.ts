import { Book } from '../book/book';
import { CartService } from './cart.service';

describe('Cart', () => {

    let book1: Book;
    let book2: Book;
    let book3: Book;
    let cart: CartService;

    beforeEach(() => {

        book1 = new Book('eXtreme Programming Explained', 'Kent Beck', 10);
        book2 = new Book('ReWork', 'Jason Fried', 20);
        book3 = new Book('eXtreme Programming Explained', 'Kent Beck', 10);

        cart = new CartService();

    });

    it('should add books', () => {

        const emptyBookList = cart.getBookList();

        cart.addBook(book1);
        cart.addBook(book2);
        cart.addBook(book3);

        const bookList = cart.getBookList();

        expect(emptyBookList).toEqual([]);

        expect(bookList).toEqual([
            book1,
            book2,
            book3
        ]);

    });

    it('should remove books', () => {

        cart.addBook(book1);
        cart.addBook(book2);
        cart.addBook(book3);

        cart.removeBook(book1);

        const bookList = cart.getBookList();

        expect(bookList).toEqual([
            book2,
            book3
        ]);

    });

});
