describe('Cart', () => {

    let bagel: Sandwich;
    let burger: Sandwich;
    let butter: Sandwich;
    let cart: Cart;

    beforeEach(() => {

        bagel = new Sandwich('Bagel', 8);
        burger = new Sandwich('Burger', 10);
        butter = new Sandwich('Jambon & Beurre', 5);

        cart = new Cart();

    });

    xit('🚧 should add sandwich', () => {

        const emptySandwichList = cart.getSandwichList();

        expect(emptySandwichList).toEqual([]);

        cart.addSandwich(bagel);
        cart.addSandwich(burger);
        cart.addSandwich(butter);

        const sandwichList = cart.getSandwichList();

        expect(sandwichList).toEqual([
            bagel,
            burger,
            butter
        ]);

    });

    xit('🚧 should remove sandwich', () => {

        cart.addSandwich(bagel);
        cart.addSandwich(burger);
        cart.addSandwich(butter);

        cart.removeSandwich(burger);

        const sandwichList = cart.getSandwichList();

        expect(sandwichList).toEqual([
            bagel,
            butter
        ]);

    });

});

