import { Component } from '@angular/core';
import { Cart } from './cart/cart';
import { helpRouteHelper } from './help/help-route-helper';

@Component({
    selector: 'wt-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    appRouteHelper = helpRouteHelper;

    constructor(private _cart: Cart) {
    }

    getTotalPrice() {
        console.count('getTotalPrice');
        return this._cart.getTotalPrice();
    }

}
