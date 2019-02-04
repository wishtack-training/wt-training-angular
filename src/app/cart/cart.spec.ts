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

    it('should remove books', () => {

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