export class Book {

    id: string;

    authorName: string;
    title: string;

    constructor(args: Partial<Book> = {}) {

        this.id = args.id;

        this.authorName = args.authorName;
        this.title = args.title;

    }

}
