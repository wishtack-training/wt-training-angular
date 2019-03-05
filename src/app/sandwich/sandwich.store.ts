import { Sandwich, SandwichConstraint } from './sandwich';

export class SandwichStore {

    private _sandwichList: Sandwich[] = [];

    addSandwich(sandwich: Sandwich) {
        this._sandwichList = [...this._sandwichList, sandwich];
    }

    getSandwichList(): Sandwich[] {
        return this._sandwichList;
    }

    removeSandwich(sandwich: Sandwich) {
        this._sandwichList = this._sandwichList
            .filter(_sandwich => _sandwich !== sandwich);
    }

    searchSandwichesByConstraint(sandwichConstraintList: SandwichConstraint[]): Sandwich[] {
        throw new Error('😱 Not implemented yet!');
    }

}
