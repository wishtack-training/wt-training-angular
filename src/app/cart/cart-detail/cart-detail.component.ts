import { Component } from '@angular/core';
import { Cart } from '../cart';
import { Sandwich } from '../sandwich';

@Component({
    selector: 'wt-cart-detail',
    templateUrl: './cart-detail.component.html',
    styleUrls: ['./cart-detail.component.scss']
})
export class CartDetailComponent {

    sandwich = new Sandwich();

    private _cart = new Cart();

    addSandwich() {
        this._cart.addSandwich(this.sandwich);
        this.sandwich = new Sandwich();
    }

    getSandwichList() {
        return this._cart.getSandwichList();
    }

    removeSandwich(sandwich: Sandwich) {
        this._cart.removeSandwich(sandwich);
    }

    addBurger() {
        this._cart.addSandwich(new Sandwich('Burger', 10));
    }
}
