
export class Book {

    authorName: string;
    title: string;

    constructor(args: Partial<Book> = {}) {
        this.authorName = args.authorName;
        this.title = args.title;
    }

}

// const book1 = new Book({authorName: 'test', title: 'test'});
// const book2 = new Book(book1);
// const book3 = new Book(JSON.parse('{}'));
// const book4 = new Book({title: 'test'});
// const book5 = new Book();
//
// interface Thenable {
//     then(callback: (...args) => unknown);
// }
//
// const promise: Thenable = new Promise(() => {});
