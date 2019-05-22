import { Component, OnInit } from '@angular/core';
import { Cart } from '../cart';
import { Sandwich } from '../sandwich';

@Component({
    selector: 'wt-cart-detail',
    templateUrl: './cart-detail.component.html',
    styleUrls: ['./cart-detail.component.scss']
})
export class CartDetailComponent implements OnInit {

    private _cart = new Cart();

    ngOnInit() {
        this._cart.addSandwich(new Sandwich({
            title: 'Burger',
            price: 10
        }));
        this._cart.addSandwich(new Sandwich({
            title: '2 x Beurre',
            price: 4
        }));
    }

    addSandwich() {

        const title = prompt('Title');
        const price = parseInt(prompt('Price'), 10);

        const sandwich = new Sandwich({title, price});

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
