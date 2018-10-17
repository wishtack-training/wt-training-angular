import {Book} from './book';

export class BookStore {

    constructor($rootScope, $window) {

        this._loadBookList();

        $window.addEventListener('storage', () => {
            this._loadBookList();
            $rootScope.$apply();
        });

    }

    addBook(book) {
        const bookList = [...this._bookList, book];
        this._updateBookList(bookList);
    }

    getBookList() {
        return this._bookList;
    }

    removeBook(book) {
        const bookList = this._bookList.filter(_book => _book !== book);
        this._updateBookList(bookList);
    }

    _loadBookList() {

        let bookList = [];

        const bookDataListRaw = localStorage.getItem('cart');
        const bookDataList = JSON.parse(bookDataListRaw);

        if (bookDataList != null) {
            bookList = bookDataList.map(bookData => new Book(bookData));
        }

        this._bookList = bookList;

    }

    _updateBookList(bookList) {
        this._bookList = bookList;
        localStorage.setItem('cart', JSON.stringify(bookList));
    }

}

BookStore.$inject = [
    '$rootScope',
    '$window'
];
