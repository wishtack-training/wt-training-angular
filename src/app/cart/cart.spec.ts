class Sandwich {

    constructor(
        public title: string,
        public price: number
    ) {
    }

}

class Cart {

    private _sandwichList: Sandwich[] = [];

    addSandwich(sandwich: Sandwich) {
        this._sandwichList.push(sandwich);
    }

    /**
     * @deprecated WIP
     */
    getSandwichList(): Sandwich[] {
        return this._sandwichList;
    }

    /**
     * @deprecated 🚧 Work in progress.
     */
    removeSandwich(sandwich: Sandwich) {
        throw new Error('🚧 work in progress!');
    }
}

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

    it('🚧 should add sandwich', () => {

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

