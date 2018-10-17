import {Book} from '../book';


export class BookSearchComponent {

    constructor($http, $scope, bookStore) {

        this._$http = $http;
        this._$scope = $scope;
        this._bookStore = bookStore;
        this.bookList = null;
        this.keywords = null;

    }

    buy(book) {
        this._bookStore.addBook(book);
    }

    isBought(book) {
        const bookList = this._bookStore.getBookList();
        return bookList.find(_book => _book.id === book.id) != null;
    }

    async submitKeywords() {

        const response = await this._$http.get('https://www.googleapis.com/books/v1/volumes', {
            params: {
                q: this.keywords
            }
        });

        this.bookList = response.data.items.map(item => {

            const authors = item.volumeInfo.authors;

            return new Book({
                id: item.id,
                title: item.volumeInfo.title,
                authorName: authors && authors[0]
            });

        });

        this._$scope.$digest();

    }

}

BookSearchComponent.$inject = [
    '$http',
    '$scope',
    'bookStore'
];

BookSearchComponent.config = {
    controller: BookSearchComponent,
    template: require('./book-search.component.html')
};
