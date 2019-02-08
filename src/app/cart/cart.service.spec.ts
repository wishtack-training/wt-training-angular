import { TestBed } from '@angular/core/testing';
import { Book } from '../book-shared/book';
import { CartService } from './cart.service';
import { CartStore } from './cart.store';

describe('CartService', () => {

    let book1: Book;
    let book2: Book;

    beforeEach(() => {
        TestBed.configureTestingModule({});
    });

    beforeEach(() => {

        book1 = new Book({
            title: 'eXtreme Programming Explained'
        });

        book2 = new Book({
            title: 'Clean Code',
            pictureUri: null
        });

    });

    let cartService: CartService;
    beforeEach(() => cartService = TestBed.get(CartService));

    let cartStore: CartStore;
    beforeEach(() => cartStore = TestBed.get(CartStore));

    it('should add books to cart', () => {

        cartService.addBook(book1);
        cartService.addBook(book2);

        const bookList = cartStore._value().bookList;

        expect(bookList).toEqual([
            book1,
            book2
        ]);

    });

});
