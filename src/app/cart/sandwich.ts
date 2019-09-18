export class Sandwich {

  title: string;
  price: number;

  constructor(args: Partial<Sandwich> = {}) {
    this.title = args.title;
    this.price = args.price;
  }

}
