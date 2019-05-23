import { Injectable } from '@angular/core';
import { Sandwich } from './sandwich';

@Injectable({
    providedIn: 'root'
})
export class Cart {

    private _sandwichList: Sandwich[] = [];

    addSandwich(sandwich: Sandwich) {
        this._sandwichList = [...this._sandwichList, sandwich];
    }

    getSandwichList() {
        return this._sandwichList;
    }

    getTotalPrice() {
        return this._sandwichList.reduce((total, sandwich) => total + sandwich.price, 0);
    }

    removeSandwich(sandwich: Sandwich) {
        this._sandwichList = this._sandwichList
            .filter(_sandwich => _sandwich !== sandwich);
    }

}
