import { Author } from '../author/author';

export class Book {

    author: Author;
    title: string;
    price: number;

    constructor(args: Partial<Book> = {}) {
        this.author = args.author != null ? new Author(args.author) : null;
        this.title = args.title;
        this.price = args.price;
    }

}
