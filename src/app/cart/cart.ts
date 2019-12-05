import { Injectable } from '@angular/core';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class Cart {
  private _itemList: Item[] = [];

  addItem(item: Item) {
    this._itemList.push(item);
  }

  getItemList() {
    return this._itemList;
  }

  removeItem(item: Item) {
    this._itemList = this._itemList.filter(_item => _item !== item);
  }

  getTotalPrice(): number {
    return this._itemList.reduce((acc, item) => acc + item.price, 0);
  }
}
