export interface Item {
  title: string;
  price: number;
}

export function createItem({title, price}: Item): Item {
  return {
    title,
    price
  };
}
