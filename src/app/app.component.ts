import { Component } from '@angular/core';
import { CartQuery } from './cart-v2/cart.query';

@Component({
  selector: 'wt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'training';
  totalPrice$ = this._cartQuery.totalPrice$;

  constructor(private _cartQuery: CartQuery) {
  }

}
