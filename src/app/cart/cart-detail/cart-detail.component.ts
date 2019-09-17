import { Component, OnInit } from '@angular/core';
import { Cart } from '../cart';

@Component({
    selector: 'wt-cart-detail',
    templateUrl: './cart-detail.component.html',
    styleUrls: ['./cart-detail.component.scss']
})
export class CartDetailComponent implements OnInit {

    cart = new Cart();

    constructor() {
    }

    ngOnInit() {
        // this.cart.addSandwich(new )
    }

}
