
export class Book {

    id: string;
    title: string;
    author: string;
    isbn: string;
    price: number;

    constructor(args: Partial<Book> = {}) {
        this.id = args.id;
        this.title = args.title;
        this.author = args.author;
        this.isbn = args.isbn;
        this.price = args.price;
    }

}
