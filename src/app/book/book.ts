export class BookSchema {

    id?: string;
    pictureUrl?: string;
    title?: string;

    constructor(args: BookSchema = {}) {
        this.id = args.id;
        this.pictureUrl = args.pictureUrl;
        this.title = args.title;
    }

}

export class Book extends BookSchema {

}
