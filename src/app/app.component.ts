import { Component } from '@angular/core';
import { CartQuery } from './cart/cart.query';
import { helpRouteHelper } from './help/help-route-helper';

@Component({
    selector: 'wt-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    appRouteHelper = helpRouteHelper;

    totalPrice$ = this._cartQuery.totalPrice$;

    constructor(private _cartQuery: CartQuery) {
    }

}
