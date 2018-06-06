import { Book } from './book';
import { BookCart } from './book-cart';

describe('BookCart', () => {

    xit('should add books to cart', () => {

        const bookCart = new BookCart();

        const book1 = new Book('eXtreme Programming');
        const book2 = new Book('ReWork');

        bookCart.addBook(book1);
        bookCart.addBook(book2);

        expect(bookCart.getBookList()).toEqual([
            book1,
            book2
        ]);

    });

    xit('should remove books from cart', () => {

        const bookCart = new BookCart();

        const book1 = new Book('eXtreme Programming');
        const book2 = new Book('ReWork');
        const book3 = new Book('Clean Code');

        bookCart.addBook(book1);
        bookCart.addBook(book2);
        bookCart.addBook(book3);

        bookCart.removeBook(book2);

        expect(bookCart.getBookList()).toEqual([
            book1,
            book3
        ]);

    });

});
