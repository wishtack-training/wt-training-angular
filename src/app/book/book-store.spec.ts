import { BookStore } from './book-store';

describe('BookStore', () => {

    it('should add books', () => {

        const bookStore = new BookStore();

        const bookListEmpty = bookStore.getBookList();

        const book1 = new Book('eXtreme Programming Explained', 10);
        const book2 = new Book('Domain Driven Design', 15);
        const book3 = new Book('Angular Router', 30);

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

        const book1 = new Book('eXtreme Programming eXplained', 10);
        const book2 = new Book('Domain Driven Design', 15);
        const book3 = new Book('Angular Router', 30);

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
