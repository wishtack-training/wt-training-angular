import { TestBed } from '@angular/core/testing';

import { Cart } from './cart.service';

describe('CartService', () => {

    beforeEach(() => TestBed.configureTestingModule({}));

    let cart: Cart;
    beforeEach(() => cart = TestBed.get(Cart));

    xit('should add sandwich', () => {

        // const burger = new Sandwich('Burger', 10);
        // const butterButter = new Sandwich('Butter & Butter', 4.3);
        //
        // cart.addSandwich(burger);
        // cart.addSandwich(butterButter);
        //
        // const sandwichList = cart.getSandwichList();
        //
        // expect(sandwichList).toEqual([
        //     burger,
        //     butterButter
        // ]);

        throw new Error('🚧 work in progress!');

    });

    xit('should calculate total price', () => {
        throw new Error('🚧 work in progress!');
    });


});
