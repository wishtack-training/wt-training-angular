import { Author } from './author';

export class Book {

    author: Author;
    pictureUrl: string;
    price: number;
    title: string;

    constructor(args: Partial<Book> = {}) {
        this.author = args.author != null ? new Author(args.author) : null;
        this.pictureUrl = args.pictureUrl;
        this.price = args.price;
        this.title = args.title;
    }

}
