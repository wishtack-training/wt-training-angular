/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

export class Book {

    title: string;

    constructor(args: Partial<Book>) {
        this.title = args.title;
    }

}
