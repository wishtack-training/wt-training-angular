import { Component } from '@angular/core';
import { Cart } from './cart/cart';

@Component({
  selector: 'mc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  totalPrice$ = this._cart.totalPrice$;

  constructor(private _cart: Cart) {
  }

}

