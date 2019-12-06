import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { ItemModule } from '../item/item.component';
import { Cart } from './cart';
import { Item } from './item';

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

