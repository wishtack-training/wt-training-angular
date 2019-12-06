import { Component, OnInit } from '@angular/core';
import { Cart } from '../cart.service';

@Component({
  selector: 'as-cart-stats',
  templateUrl: './cart-stats.component.html',
  styleUrls: ['./cart-stats.component.css']
})
export class CartStatsComponent implements OnInit {

  constructor(private _cart: Cart) {
  }

  ngOnInit() {
  }

  getTotalPrice() {
    console.count('getTotalPrice');
    return this._cart.getTotalPrice();
  }

}
