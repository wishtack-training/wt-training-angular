import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CartQuery } from '../cart.query';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'as-cart-stats',
  templateUrl: './cart-stats.component.html',
  styleUrls: ['./cart-stats.component.css']
})
export class CartStatsComponent {
  totalPrice$ = this._cartQuery.totalPrice$;

  constructor(private _cartQuery: CartQuery) {
  }
}
