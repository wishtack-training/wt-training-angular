
export class Book {

    title: string;
    author: string;
    isbn: string;
    price: number;

    constructor(args: Partial<Book> = {}) {
        this.title = args.title;
        this.author = args.author;
        this.isbn = args.isbn;
        this.price = args.price;
    }

}
