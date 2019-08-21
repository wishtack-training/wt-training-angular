import { Component, OnInit } from '@angular/core';
import { Cart } from './cart';
import { Sandwich } from './sandwich';

@Component({
    selector: 'wt-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

    selectedSandwich: Sandwich;

    constructor(private _cart: Cart) {
    }

    ngOnInit() {
    }

    addSandwich(sandwich: Sandwich) {
        this._cart.addSandwich(sandwich);
    }

    getSandwichList() {
        return this._cart.getSandwichList();
    }

    removeSandwich(sandwich: Sandwich) {
        this._cart.removeSandwich(sandwich);
    }

    getTotalPrice() {
        return this._cart.getTotalPrice();
    }

    isCartEmpty() {
        return this._cart.getSandwichList().length === 0;
    }

    editSandwich(sandwich: Sandwich) {
        this.selectedSandwich = sandwich;
    }

    replaceSandwich(previous: Sandwich, current: Sandwich) {
        this._cart.replaceSandwich(previous, current);
        this.selectedSandwich = null;
    }
}
