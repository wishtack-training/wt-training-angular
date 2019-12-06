import { Component } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CartQuery } from './cart/cart.query';
import { Cart } from './cart/cart.service';
import { Link } from './nav/nav.component';

@Component({
  selector: 'as-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'training';

  links$: Observable<Link[]> = combineLatest([this._cartQuery.isEmpty$, this._cartQuery.totalPrice$])
    .pipe(map(([isEmpty, totalPrice]) => {
      return [
        {
          route: '/book/search',
          name: 'Search'
        },
        ...isEmpty ? [] : [{
          route: '/cart',
          name: `Cart (${totalPrice})`
        }]
      ];
    }));

  constructor(private _cart: Cart, private _cartQuery: CartQuery) {
  }

}
