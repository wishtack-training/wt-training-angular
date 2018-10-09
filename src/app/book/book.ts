export class Book {

    authorName: string;
    title: string;
    price: number;

    constructor(args: Partial<Book> = {}) {
        this.authorName = args.authorName;
        this.title = args.title;
        this.price = args.price;
    }

}
