import { Component } from '@angular/core';
import { Cart } from './cart/cart';
import { CartQuery } from './cart/cart.query';

@Component({
  selector: 'mc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  totalPrice$ = this._cartQuery.totalPrice$;

  constructor(private _cartQuery: CartQuery) {
  }

}
