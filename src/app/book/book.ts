export class Book {

    authorName: string;
    title: string;

    constructor(args: Partial<Book> = {}) {
        this.authorName = args.authorName;
        this.title = args.title;
    }

}
