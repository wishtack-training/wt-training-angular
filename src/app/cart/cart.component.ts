import { Component, OnInit } from '@angular/core';
import { Cart } from './cart';
import { Sandwich } from './sandwich';

@Component({
    selector: 'wt-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

    editedSandwich = new Sandwich();

    private _cart = new Cart();

    ngOnInit() {
    }

    addSandwich() {
        this._cart.addSandwich(this.editedSandwich);
        this.editedSandwich = new Sandwich();
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

    updateSandwichTitle(title: string) {
        this.editedSandwich = new Sandwich(title, this.editedSandwich.price);
    }
}
