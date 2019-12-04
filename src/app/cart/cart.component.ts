import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Cart } from './cart';
import { createItem, Item } from './item';

@Component({
  selector: 'as-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  itemFormGroup = new FormGroup({
    title: new FormControl()
  });

  private _cart = new Cart();

  ngOnInit() {
  }

  addItem() {
    const item = createItem(prompt('Item name'), Math.random() * 100);
    this._cart.addItem(item);
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
}

