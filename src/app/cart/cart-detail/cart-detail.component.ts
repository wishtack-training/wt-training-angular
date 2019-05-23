import { Component } from '@angular/core';
import { Cart } from '../cart.service';
import { Sandwich } from '../sandwich';

@Component({
    selector: 'wt-cart-detail',
    templateUrl: './cart-detail.component.html',
    styleUrls: ['./cart-detail.component.scss']
})
export class CartDetailComponent {

    constructor(private _cart: Cart) {
    }

    addSandwich(sandwich: Sandwich) {
        this._cart.addSandwich(sandwich);
    }

    getSandwichList() {
        return this._cart.getSandwichList();
    }

    getTotalPrice() {
        return this._cart.getTotalPrice();
    }

    isEmpty() {
        return this.getSandwichList().length === 0;
    }

    removeSandwich(sandwich: Sandwich) {
        this._cart.removeSandwich(sandwich);
    }
}
