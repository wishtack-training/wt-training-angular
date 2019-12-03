interface Item {
  title: string;
  price: number;
}

class Cart {

  addItem(item: Item) {
    throw new Error('🚧 work in progress!');
  }

  getItemList(): Item[] {
    throw new Error('🚧 work in progress!');
  }

  removeItem(item: Item) {
    throw new Error('🚧 work in progress!');
  }

  getTotalPrice(): number {
    throw new Error('🚧 work in progress!');
  }
}

function createItem(title: string, price: number): Item {
  throw new Error('🚧 work in progress!');
}

describe('Cart', () => {

  let cart: Cart;
  let extremeProgramming: Item;
  let rework: Item;

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
