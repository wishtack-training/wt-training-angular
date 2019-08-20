import { Sandwich } from './sandwich';

export class Cart {
    private _sandwichList: Sandwich[] = [];

    getSandwichList(): Sandwich[] {
        return this._sandwichList;
    }

    addSandwich(sandwich: Sandwich) {
        this._sandwichList.push(sandwich);
    }

    removeSandwich(sandwich: Sandwich) {
        const index = this._sandwichList.indexOf(sandwich);
        if (index !== -1) {
            this._sandwichList.splice(index, 1);
        }
    }
}
