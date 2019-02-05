
export class Book {

    title: string;
    author: string;
    price: number;

    constructor(args: Partial<Book> = {}) {
        this.title = args.title;
        this.author = args.author;
        this.price = args.price;
    }

}
