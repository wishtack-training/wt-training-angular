import { Component, OnInit } from '@angular/core';
import { Cart } from './cart';
import { Item } from './item';

@Component({
  selector: 'as-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  private _cart = new Cart();

  ngOnInit() {
  }

  getItemList() {
    return this._cart.getItemList();
  }

  getTotalPrice() {
    return this._cart.getTotalPrice();
  }

  removeItem(item: Item) {
    this._cart.removeItem(item);
  }

  addItem(item: Item) {
    this._cart.addItem(item);
  }
}

