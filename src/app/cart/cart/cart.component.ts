import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { timer } from 'rxjs';
import { map } from 'rxjs/operators';
import { BookCardModule } from '../../book-card/book-card.component';
import { Book } from '../cart';
import { CartQuery } from '../cart.query';
import { CartService } from '../cart.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'mc-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  now$ = timer(0, 100)
    .pipe(map(() => new Date()));
  bookList$ = this._cartQuery.bookList$;
  totalPrice$ = this._cartQuery.totalPrice$;

  constructor(private _cart: CartService, private _cartQuery: CartQuery) {
  }

  remove(book: Book) {
    this._cart.removeBook(book);
  }

}

@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    FlexModule,
    BookCardModule
  ]
})
export class CartModule {
}
