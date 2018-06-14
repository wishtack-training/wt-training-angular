
export class BookSchema {

    title?: string;
    description?: string;

    constructor(args: BookSchema = {}) {
        this.title = args.title;
        this.description = args.description;
    }

}

export class Book extends BookSchema {
}
