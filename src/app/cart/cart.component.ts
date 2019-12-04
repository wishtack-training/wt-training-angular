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
    price: new FormControl(null, [
      Validators.min(0)
    ])
  });

  private _cart = new Cart();

  ngOnInit() {
  }

  /**
   * Just a demo to collect errors.
   * @todo make it recursive.
   */
  getAllErrors() {

    const controlEntryList = Object.entries(this.itemFormGroup.controls);
    const controlErrors = controlEntryList
      .filter(([_, control]) => !control.valid)
      .map(([name, control]) => ({name, errors: control.errors}))
    const errorDict = controlErrors.reduce((acc, {name, errors}) => ({
      ...acc,
      [name]: errors
    }), {});

    return errorDict;

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

