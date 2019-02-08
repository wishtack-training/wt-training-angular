import { Book } from '../book-shared/book';
import { CartService } from './cart.service';

describe('CartService', () => {

    it('should add books to cart', () => {

        const cartService = new CartService();

        const book1 = new Book({
            title: 'eXtreme Programming Explained'
        });
        const book2 = new Book({
            title: 'Clean Code',
            pictureUri: null
        });

        cartService.addBook(book1);
        cartService.addBook(book2);

        const bookList = cartService.getBookList();

        expect(bookList).toEqual([
            book1,
            book2
        ]);

    });

});
