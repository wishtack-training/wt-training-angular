export interface Item {
  title: string;
  price: number;
}

export function createItem(title: string, price: number): Item {
  return {
    title,
    price
  };
}
