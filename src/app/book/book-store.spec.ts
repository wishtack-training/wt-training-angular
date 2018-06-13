import { Book } from './book';
import { BookStore } from './book-store';

describe('BookStore', () => {

    it('should add books', () => {

        const bookStore = new BookStore();

        const bookListEmpty = bookStore.getBookList();

        const book1 = new Book('eXtreme Programming Explained');
        const book2 = new Book('ReWork');
        const book3 = new Book('Clean Code');

        bookStore.addBook(book1);
        bookStore.addBook(book2);
        bookStore.addBook(book3);

        const bookList = bookStore.getBookList();

        expect(bookListEmpty).toEqual([]);

        expect(bookList).toEqual([
            book1,
            book2,
            book3
        ]);

    });

    it('should remove books', () => {

        const bookStore = new BookStore();

        const book1 = new Book('eXtreme Programming Explained');
        const book2 = new Book('ReWork');
        const book3 = new Book('Clean Code');

        bookStore.addBook(book1);
        bookStore.addBook(book2);
        bookStore.addBook(book3);

        bookStore.removeBook(book2);

        const bookList = bookStore.getBookList();

        expect(bookList).toEqual([
            book1,
            book3
        ]);

    });

});
