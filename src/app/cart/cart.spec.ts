import { Cart } from './cart';
import { Sandwich } from './sandwich';

describe('Cart', () => {

    let cart: Cart;
    let burger: Sandwich;
    let butter: Sandwich;
    let cheese: Sandwich;

    beforeEach(() => {
        cart = new Cart();
        burger = new Sandwich({title: 'Burger', price: 12});
        butter = new Sandwich({title: 'Double Beurre', price: 6});
        cheese = new Sandwich({title: 'Cheese', price: 10});
    });

    it('should add sandwiches', () => {

        const emptySandwichList = cart.getSandwichList();

        cart.addSandwich(burger);
        cart.addSandwich(butter);
        cart.addSandwich(cheese);

        const sandwichList = cart.getSandwichList();

        expect(emptySandwichList).toEqual([]);

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

    it('should compute total price', () => {

        cart.addSandwich(burger);
        cart.addSandwich(butter);
        cart.addSandwich(cheese);

        expect(cart.getTotalPrice()).toEqual(28);

    });

});
