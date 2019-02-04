class Book {

    title: string;
    author: string;
    price: number;

    constructor(title: string, author: string, price: number) {
        this.title = title;
        this.author = author;
        this.price = price;
    }

}

class Cart {

    private _bookList: Book[] = [];

    addBook(book: Book) {
        this._bookList.push(book);
    }

    getBookList() {
        return this._bookList;
    }

    /**
     * @deprecated not implemented yet
     * @param book
     */
    removeBook(book: Book) {
        throw new Error('😱 Not implemented yet!');
    }
}

describe('Cart', () => {

    it('should add books', () => {

        const book1 = new Book('eXtreme Programming Explained', 'Kent Beck', 10);
        const book2 = new Book('ReWork', 'Jason Fried', 20);
        const book3 = new Book('eXtreme Programming Explained', 'Kent Beck', 10);

        const cart = new Cart();

        cart.addBook(book1);
        cart.addBook(book2);
        cart.addBook(book3);

        const bookList = cart.getBookList();

        expect(bookList).toEqual([
            book1,
            book2,
            book3
        ]);

    });

    xit('should remove books', () => {

        const book1 = new Book('eXtreme Programming Explained', 'Kent Beck', 10);
        const book2 = new Book('ReWork', 'Jason Fried', 20);
        const book3 = new Book('eXtreme Programming Explained', 'Kent Beck', 10);

        const cart = new Cart();

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