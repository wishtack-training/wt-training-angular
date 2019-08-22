
export class Sandwich {

    id: string;

    title: string;
    price: number;

    constructor(args: Partial<Sandwich> = {}) {
        this.id = args.id;
        this.price = args.price;
        this.title = args.title;
    }

}
