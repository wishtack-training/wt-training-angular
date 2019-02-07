/**
 *
 * (c) 2013-2019 Wishtack
 *
 */

export class Book {

    id: string;

    author: string;
    pictureUri: string;
    title: string;

    constructor(args: Partial<Book> = {}) {

        this.id = args.id;

        this.author = args.author;
        this.pictureUri = args.pictureUri;
        this.title = args.title;

    }

}
