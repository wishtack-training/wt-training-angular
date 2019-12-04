import { Component } from '@angular/core';
import { createItem } from '../cart/item';

@Component({
  selector: 'as-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  item = createItem({title: 'eXtreme Programming Explained', price: 5});
  private _interval;

  canBuy() {
    return this.item.price < 30;
  }

  isMadness() {
    return this._interval != null;
  }

  startMadness() {
    this.stopMadness();
    this._interval = setInterval(() => {
      // this.item.price = 50 * Math.random();
      this.item = createItem({title: 'eXtreme Programming Explained', price: 50 * Math.random()});
    }, 50);
  }

  stopMadness() {
    clearInterval(this._interval);
    this._interval = null;
  }
}
