export class Author {

    name?: string;

    constructor(args: Partial<Author> = {}) {
        this.name = args.name;
    }

}
