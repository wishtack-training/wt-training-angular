import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Cart } from './cart';
import { createItem, Item } from './item';

@Component({
  selector: 'as-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  itemFormGroup = new FormGroup({
    title: new FormControl(null, [
      Validators.required,
      Validators.maxLength(12)
    ]),
    price: new FormControl()
  });

  private _cart = new Cart();

  ngOnInit() {
  }

  addItem() {
    const item = createItem(this.itemFormGroup.value);
    this._cart.addItem(item);
    this.itemFormGroup.reset();
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

