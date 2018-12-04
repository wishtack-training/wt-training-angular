import { Book } from './book';

export class BookStore {

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
