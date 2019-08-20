import { Sandwich } from './sandwich';

export class Cart {
    private _sandwichList: Sandwich[] = [];

    getSandwichList(): Sandwich[] {
        return this._sandwichList;
    }

    addSandwich(sandwich: Sandwich) {
        this._sandwichList = [...this._sandwichList, sandwich];
    }

    removeSandwich(sandwich: Sandwich) {
        this._sandwichList = this._sandwichList.filter(_sandwich => _sandwich !== sandwich);
    }
}
