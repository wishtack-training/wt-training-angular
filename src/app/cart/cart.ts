import { Book } from './book';

export class Cart {

    private _bookList: Book[] = [];

    addBook(book: Book) {
        this._bookList = [...this._bookList, book];
    }

    getBookList() {
        return this._bookList;
    }

    removeBook(book: Book) {
        this._bookList = this._bookList.filter(_book => _book !== book);
    }

}