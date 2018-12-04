class BookStore {

    private _bookList: Book[] = [];

    getBookList() {
        return this._bookList;
    }

    addBook(book: Book) {
        this._bookList.push(book);
    }

    removeBook(book: Book) {
        this._bookList = this._bookList.filter(_book => book !== _book);
    }

}

class Book {

    authorName: string;
    title: string;

    constructor(title: string, authorName: string) {
        this.authorName = authorName;
        this.title = title;
    }

}

describe('BookStore', () => {

    let bookStore: BookStore;

    let book1: Book;
    let book2: Book;
    let book3: Book;

    beforeEach(() => {

        bookStore = new BookStore();

        book1 = new Book('eXtreme Programming', 'Kent Beck');
        book2 = new Book('ReWork', 'Jason Fried');
        book3 = new Book('eXtreme Programming', 'Kent Beck');

    });

    it('should add books', () => {

        const bookListEmpty = bookStore.getBookList();

        expect(bookListEmpty).toEqual([]);

        bookStore.addBook(book1);
        bookStore.addBook(book2);
        bookStore.addBook(book3);

        const bookList = bookStore.getBookList();

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
