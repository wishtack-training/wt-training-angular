import { Cart } from './cart';
import { Sandwich } from './sandwich';

describe('Cart', () => {

    let cart: Cart;
    let burger: Sandwich;
    let butter: Sandwich;
    let cheese: Sandwich;

    beforeEach(() => {
        cart = new Cart();
        burger = new Sandwich('Burger', 12);
        butter = new Sandwich('Double Beurre', 6);
        cheese = new Sandwich('Cheese', 10);
    });

    it('should add sandwiches', () => {

        const emptySandwichList = cart.getSandwichList();

        expect(emptySandwichList).toEqual([]);

        cart.addSandwich(burger);
        cart.addSandwich(butter);
        cart.addSandwich(cheese);

        const sandwichList = cart.getSandwichList();

        expect(sandwichList).toEqual([
            burger,
            butter,
            cheese
        ]);

    });

    it('should remove sandwiches', () => {

        cart.addSandwich(burger);
        cart.addSandwich(butter);
        cart.addSandwich(cheese);

        cart.removeSandwich(butter);

        const sandwichList = cart.getSandwichList();

        expect(sandwichList).toEqual([
            burger,
            cheese
        ]);

    });

});
