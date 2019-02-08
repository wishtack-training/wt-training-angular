import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { Book } from '../book-shared/book';

export interface CartState {
    bookList: Book[];
}

export function createInitialState(): CartState {
    return {
        bookList: []
    };
}

@Injectable({
    providedIn: 'root'
})
@StoreConfig({
    name: 'cart',
    resettable: true
})
export class CartStore extends Store<CartState> {

    constructor() {
        super(createInitialState());
    }

}
