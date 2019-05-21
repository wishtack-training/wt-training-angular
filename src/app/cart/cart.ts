import { Sandwich } from './sandwich';

export class Cart {

    private _sandwichList: Sandwich[] = [];

    addSandwich(sandwich: Sandwich) {
        this._sandwichList.push(sandwich);
    }

    getSandwichList() {
        return this._sandwichList;
    }

    getTotalPrice(): number {
        throw new Error('🚧 work in progress!');
    }

}
