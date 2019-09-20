export class Sandwich {

  id: string;
  title: string;
  price: number;

  constructor(args: Partial<Sandwich> = {}) {
    this.id = args.id;
    this.title = args.title;
    this.price = args.price;
  }

}
