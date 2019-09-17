import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../reducers';
import { Cart } from '../cart';
import { addSandwich } from '../cart.actions';
import { sandwichList } from '../cart.selectors';
import { Sandwich } from '../sandwich';

@Component({
    selector: 'wt-cart-detail',
    templateUrl: './cart-detail.component.html',
    styleUrls: ['./cart-detail.component.scss']
})
export class CartDetailComponent {

    sandwichList$ = this._store.select(sandwichList);

    constructor(private _store: Store<State>) {
    }

    add() {
        this._store.dispatch(addSandwich({sandwich: new Sandwich('test', 10)}));
    }
}
