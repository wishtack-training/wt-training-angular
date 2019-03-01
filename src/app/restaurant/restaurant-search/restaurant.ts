import { FoodConstraint } from '../../group/food-constraint';

export class Restaurant {
    id: string;
    city: string;
    foodConstraints: FoodConstraint[];
    name: string;

    constructor(args: Partial<Restaurant> = {}) {
        this.id = args.id;
        this.city = args.city;
        this.foodConstraints = args.foodConstraints;
        this.name = args.name;
    }

}
