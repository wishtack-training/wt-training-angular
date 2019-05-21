import { Cart } from './cart';
import { Sandwich } from './sandwich';

describe('Cart', () => {

    let burger: Sandwich;
    let butter: Sandwich;
    let cart: Cart;

    beforeEach(() => {

        burger = new Sandwich('Burger', 10);
        butter = new Sandwich('Jambon & Beurre', 5);

        cart = new Cart();

    });

    it('should add sandwich', () => {

        const emptySandwichList = cart.getSandwichList();

        cart.addSandwich(burger);
        cart.addSandwich(butter);

        const sandwichList = cart.getSandwichList();

        expect(emptySandwichList).toEqual([]);

        expect(sandwichList).toEqual([
            burger,
            butter
        ]);

    });

    it('should get total price', () => {

        cart.addSandwich(burger);
        cart.addSandwich(butter);

        expect(cart.getTotalPrice()).toEqual(15);

    });

});

