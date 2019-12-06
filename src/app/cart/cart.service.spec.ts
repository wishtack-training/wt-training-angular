import { createItem, Item } from '../item/item';
import { Cart } from './cart.service';

describe('Cart', () => {

  let cart: Cart;
  let extremeProgramming: Item;
  let rework: Item;

  beforeEach(() => {
    cart = new Cart();
    extremeProgramming = createItem({title: 'eXtreme Programming Explained', price: 25});
    rework = createItem({title: 'ReWork', price: 30});
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
