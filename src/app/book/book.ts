import { Author } from '../author/author';

export class Book {

    id: string;

    author: Author;
    pictureUrl: string;
    price: number;
    title: string;

    constructor(args: Partial<Book> = {}) {

        this.id = args.id;

        this.author = args.author != null ? new Author(args.author) : null;
        this.pictureUrl = args.pictureUrl;
        this.price = args.price;
        this.title = args.title;

    }

}
