import { Component, OnInit } from '@angular/core';
import { Cart } from './cart';

@Component({
  selector: 'as-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart = new Cart();

  constructor() {
  }

  ngOnInit() {
  }

}
