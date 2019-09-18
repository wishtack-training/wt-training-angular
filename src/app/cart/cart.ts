import { Sandwich } from './sandwich';

export class Cart {

  private _sandwichList: Sandwich[] = [];

  addSandwich(sandwich: Sandwich) {
    this._sandwichList = [...this._sandwichList, sandwich];
  }

  getSandwichList() {
    return this._sandwichList;
  }

  removeSandwich(sandwich: Sandwich) {
    this._sandwichList = this._sandwichList
      .filter(_sandwich => _sandwich !== sandwich);
  }

  replaceSandwich(previous: Sandwich, current: Sandwich) {
    this._sandwichList = this._sandwichList
      .map(sandwich => {

        if (sandwich === previous) {
          return current;
        }

        return sandwich;
      });
  }

}
