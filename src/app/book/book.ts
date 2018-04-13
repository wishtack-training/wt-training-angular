export class Book {

    title?: string;

    constructor(args: Book = {}) {
        this.title = args.title;
    }

}
