import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CartState, CartStore } from './cart.store';

@Injectable({
    providedIn: 'root'
})
export class CartQuery extends Query<CartState> {

    sandwichList$ = this.select('sandwichList');
    totalPrice$: Observable<number>;

    constructor(protected store: CartStore) {
        super(store);

        this.totalPrice$ = this.sandwichList$
            .pipe(
                map(sandwichList => {
                    return sandwichList.map(sandwich => sandwich.price)
                        .reduce((total, price) => total + price, 0);
                })
            );

    }

}
