/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

export class Book {

    id?: string;
    title?: string;
    pictureUrl?: string;

    constructor(args: Book = {}) {
        this.id = args.id;
        this.title = args.title;
        this.pictureUrl = args.pictureUrl;
    }

}
