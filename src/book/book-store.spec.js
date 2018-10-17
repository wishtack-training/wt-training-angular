'use strict';


import {BookStore} from './book-store';
import {Book} from './book';

describe('BookStore', () => {

    let bookStore;
    let book1;
    let book2;
    let book3;

    beforeEach(() => {

        bookStore = new BookStore();

        book1 = new Book({
            title: 'eXtreme Programming Explained',
            price: 10,
            authorName: 'Kent Beck'
        });
        book2 = new Book({
            title: 'Lean Startup',
            price: 20,
            authorName: 'Eric Ries'
        });
        book3 = new Book({
            title: 'Rework',
            price: 10,
            authorName: 'Jason Fried'
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
