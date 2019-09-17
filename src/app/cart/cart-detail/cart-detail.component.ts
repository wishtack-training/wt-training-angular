import { Component } from '@angular/core';
import { Cart } from '../cart';
import { Sandwich } from '../sandwich';

@Component({
    selector: 'wt-cart-detail',
    templateUrl: './cart-detail.component.html',
    styleUrls: ['./cart-detail.component.scss']
})
export class CartDetailComponent {

    private _cart = new Cart();

    addSandwich() {
        const title = prompt('title');
        const price = parseFloat(prompt('price'));
        const sandwich = new Sandwich(title, price);
        this._cart.addSandwich(sandwich);
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
