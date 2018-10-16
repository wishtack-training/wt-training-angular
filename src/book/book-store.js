export class BookStore {

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