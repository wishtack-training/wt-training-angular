import { TestBed } from '@angular/core/testing';
import { Book } from './book';
import { BookStore } from './book-store';

describe('BookStore', () => {

    let bookStore: BookStore;

    let book1: Book;
    let book2: Book;
    let book3: Book;

    beforeEach(() => {
        TestBed.configureTestingModule({});
    });

    beforeEach(() => {

        bookStore = TestBed.get(BookStore);

        book1 = new Book({
            title: 'eXtreme Programming Explained',
            authorName: 'Kent Beck'
        });
        book2 = new Book({
            title: 'ReWork',
            authorName: 'Jason Fried'
        });
        book3 = new Book({
            title: 'eXtreme Programming Explained',
            authorName: 'Kent Beck'
        });

    });

    it('should add books', () => {

        const bookListEmpty = bookStore.getBookList();

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
