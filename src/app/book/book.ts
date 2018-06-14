
export class BookSchema {

    id?: string;
    title?: string;
    description?: string;
    pictureUrl?: string;

    constructor(args: BookSchema = {}) {
        this.id = args.id;
        this.title = args.title;
        this.description = args.description;
        this.pictureUrl = args.pictureUrl;
    }

}

export class Book extends BookSchema {
}
