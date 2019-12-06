import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { Cart } from '../../../cart/cart.service';
import { Item } from '../../../item/item';
import { ItemModule } from '../../../item/item/item.component';

@Component({
  selector: 'as-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private _cart: Cart) {
  }

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

@NgModule({
  declarations: [CartComponent],
  exports: [CartComponent],
  imports: [
    CommonModule,
    ItemModule
  ]
})
export class CartModule {
}

