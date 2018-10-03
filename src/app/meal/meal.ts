/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

export enum MealType {
    desert = 'desert',
    main = 'main',
    starter = 'starter'
}

export class Meal {

    id: string;
    name: string;
    price: number;
    type: MealType;

    constructor(args: Partial<Meal> = {}) {
        this.id = args.id;
        this.name = args.name;
        this.price = args.price;
        this.type = args.type;
    }

}
