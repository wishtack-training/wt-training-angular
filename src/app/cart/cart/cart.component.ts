import { Component } from '@angular/core';
import { Cart } from '../cart';

@Component({
  selector: 'mc-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  constructor(private _cart: Cart) {
  }

  getBookList() {
    return this._cart.getBookList();
  }

}
