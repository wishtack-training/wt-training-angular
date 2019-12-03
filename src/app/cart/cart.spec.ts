import { Cart } from './cart';
import { createItem, Item } from './item';

describe('Cart', () => {

  let cart: Cart;
  let extremeProgramming: Item;
  let rework: Item;

  beforeEach(() => {
    cart = new Cart();
    extremeProgramming = createItem('eXtreme Programming Explained', 25);
    rework = createItem('ReWork', 30);
  });

  it('should add items', () => {

    cart.addItem(extremeProgramming);
    cart.addItem(rework);

    expect(cart.getItemList()).toEqual([
      extremeProgramming,
      rework
    ]);

  });

  it('should remove items', () => {

    cart.addItem(extremeProgramming);
    cart.addItem(rework);

    cart.removeItem(rework);

    expect(cart.getItemList()).toEqual([
      extremeProgramming
    ]);

  });

  it('should get total price', () => {

    cart.addItem(extremeProgramming);
    cart.addItem(rework);

    expect(cart.getTotalPrice()).toEqual(55);

  });

});
