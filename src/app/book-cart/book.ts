export class BookSchema {

    pictureUrl?: string;
    title?: string;

    constructor(args: BookSchema = {}) {
        this.pictureUrl = args.pictureUrl;
        this.title = args.title;
    }

}

export class Book extends BookSchema {

}
