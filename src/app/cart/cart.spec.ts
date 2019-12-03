describe('Cart', () => {

  let cart: Cart;
  let extremeProgramming;
  let rework;

  beforeEach(() => {
    cart = new Cart();
    extremeProgramming = createItem('eXtreme Programming Explained', 25);
    rework = createItem('ReWork', 30);
  });

  xit('should add items', () => {

    cart.addItem(extremeProgramming);
    cart.addItem(rework);

    expect(cart.getItemList()).toEqual([
      extremeProgramming,
      rework
    ]);

  });

  xit('should remove items', () => {

    cart.addItem(extremeProgramming);
    cart.addItem(rework);

    cart.removeItem(rework);

    expect(cart.getItemList()).toEqual([
      extremeProgramming
    ]);

  });

  xit('should get total price', () => {

    cart.addItem(extremeProgramming);
    cart.addItem(rework);

    expect(cart.getTotalPrice()).toEqual(55);

  });

});
