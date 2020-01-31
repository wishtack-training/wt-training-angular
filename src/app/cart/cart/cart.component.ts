import { ChangeDetectionStrategy, Component } from '@angular/core';
import { timer } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book, Cart } from '../cart';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'mc-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  now$ = timer(0, 100)
    .pipe(map(() => new Date()));

  constructor(private _cart: Cart) {
  }

  getBookList() {
    return this._cart.getBookList();
  }

  remove(book: Book) {
    this._cart.removeBook(book);
  }

  getTotalPrice() {
    console.count('getTotalPrice');
    return this._cart.getTotalPrice();
  }

  noop() {

  }
}
