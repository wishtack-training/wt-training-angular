'use strict';


class Book {

    constructor(title, price, authorName) {
        this.title = title;
        this.price = price;
        this.authorName = authorName;
    }

}

class BookStore {

    constructor() {
        this._bookList = [];
    }

    addBook(book) {
        this._bookList = [...this._bookList, book];
    }

    getBookList() {
        return this._bookList;
    }

    removeBook(book) {
        this._bookList = this._bookList.filter(_book => _book !== book);
    }

}

describe('BookStore', () => {

    let bookStore;
    let book1;
    let book2;
    let book3;

    beforeEach(() => {

        bookStore = new BookStore();

        book1 = new Book('eXtreme Programming Explained', 10, 'Kent Beck');
        book2 = new Book('Lean Startup', 20, 'Eric Ries');
        book3 = new Book('Rework', 10, 'Jason Fried');

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
