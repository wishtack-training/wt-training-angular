import { TestBed } from '@angular/core/testing';

import { Cart } from './cart.service';
import { Sandwich } from './sandwich';

describe('CartService', () => {

    beforeEach(() => TestBed.configureTestingModule({}));

    let cart: Cart;
    beforeEach(() => cart = TestBed.get(Cart));

    it('should add sandwich', () => {

        const burger = new Sandwich({title: 'Burger', price: 10});
        const butterButter = new Sandwich({title: 'Butter & Butter', price: 4.3});

        const emptySandwichList = cart.getSandwichList();

        cart.addSandwich(burger);
        cart.addSandwich(butterButter);

        const sandwichList = cart.getSandwichList();

        expect(emptySandwichList).toEqual([]);

        expect(sandwichList).toEqual([
            burger,
            butterButter
        ]);

    });

    xit('should calculate total price', () => {
        throw new Error('🚧 work in progress!');
    });


});
