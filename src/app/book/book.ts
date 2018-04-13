export class Book {

    pictureUrl?: string;
    title?: string;

    constructor(args: Book = {}) {
        this.pictureUrl = args.pictureUrl;
        this.title = args.title;
    }

}
