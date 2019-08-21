
export class Sandwich {

    title: string;
    price: number;

    constructor(args: Partial<Sandwich> = {}) {
        this.price = args.price;
        this.title = args.title;
    }

}
