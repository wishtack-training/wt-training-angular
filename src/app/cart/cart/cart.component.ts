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
  bookList$ = this._cart.bookList$;
  totalPrice$ = this._cart.totalPrice$;

  constructor(private _cart: Cart) {
  }

  remove(book: Book) {
    this._cart.removeBook(book);
  }

}
