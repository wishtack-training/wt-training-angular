import { Injectable } from '@angular/core';
import { Sandwich } from './sandwich';


@Injectable({
    providedIn: 'root'
})
export class Cart {

    constructor() {
    }

    /**
     * @deprecated work in progress
     */
    addSandwich(sandwich: Sandwich) {
        throw new Error('🚧 work in progress!');
    }

    /**
     * @deprecated work in progress
     */
    getSandwichList(): Sandwich[] {
        throw new Error('🚧 work in progress!');
    }

}
