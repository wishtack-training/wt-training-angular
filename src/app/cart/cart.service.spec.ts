import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Book } from '../book-shared/book';
import { CartService } from './cart.service';
import { CartStore } from './cart.store';

describe('CartService', () => {

    let book1: Book;
    let book2: Book;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ]
        });
    });

    beforeEach(() => {

        book1 = new Book({
            title: 'eXtreme Programming Explained'
        });

        book2 = new Book({
            title: 'Clean Code'
        });

    });

    let cartService: CartService;
    beforeEach(() => cartService = TestBed.get(CartService));

    let cartStore: CartStore;
    beforeEach(() => cartStore = TestBed.get(CartStore));

    let httpTestingController: HttpTestingController;
    beforeEach(() => httpTestingController = TestBed.get(HttpTestingController));

    afterEach(() => {
        httpTestingController.verify();
    });

    it('should add books to cart', () => {

        cartService.addBook(book1).subscribe();

        const request1 = httpTestingController.expectOne('https://api.wishtack.io/users/123/books');

        cartService.addBook(book2).subscribe();

        const request2 = httpTestingController.expectOne('https://api.wishtack.io/users/123/books');

        request1.flush({
            title: 'eXtreme Programming Explained'
        });

        request2.flush({
            title: 'Clean Code'
        });

        const bookList = cartStore._value().bookList;

        expect(bookList).toEqual([
            book1,
            book2
        ]);


    });

});
