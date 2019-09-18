import { Component } from '@angular/core';
import { Cart } from '../cart';
import { Sandwich } from '../sandwich';

@Component({
  selector: 'wt-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.scss']
})
export class CartDetailComponent {

  selectedSandwich: Sandwich;

  private _cart = new Cart();

  addSandwich(sandwich: Sandwich) {
    this._cart.addSandwich(sandwich);
  }

  getSandwichList() {
    return this._cart.getSandwichList();
  }

  removeSandwich(sandwich: Sandwich) {
    this._cart.removeSandwich(sandwich);
  }

  selectSandwich(sandwich: Sandwich) {
    this.selectedSandwich = sandwich;
  }

  replaceSandwich({previous, current}: { previous: Sandwich, current: Sandwich }) {
    this._cart.replaceSandwich(previous, current);
    this.selectedSandwich = undefined;
  }

}
