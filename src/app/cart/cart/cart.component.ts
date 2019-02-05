import { Component, OnInit } from '@angular/core';
import { Cart } from '../cart';

@Component({
    selector: 'wt-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

    private _cart = new Cart();

    constructor() {
    }

    ngOnInit() {
    }

}
