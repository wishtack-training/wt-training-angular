import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { CartQuery } from '../../../cart/cart.query';
import { Item } from '../../../item/item';
import { ItemModule } from '../../../item/item/item.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'as-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  itemList$ = this._cartQuery.itemList$;
  totalPrice$ = this._cartQuery.totalPrice$;

  constructor(private _cartQuery: CartQuery) {
  }

  removeItem(item: Item) {
    throw new Error('😱 Not implemented yet!');
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

