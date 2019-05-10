import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';

describe('CartService', () => {

    beforeEach(() => TestBed.configureTestingModule({}));

    let cartService: CartService;
    beforeEach(() => cartService = TestBed.get(CartService));

    xit('should add sandwich', () => {
        // add sandwich with a price of 4.3
        // add another sandwich with a price of 10
        // check both sandwiches are in the cart.. we might need a getSandwichList method.
        throw new Error('🚧 work in progress!');
    });

    xit('should calculate total price', () => {
        throw new Error('🚧 work in progress!');
    });


});
