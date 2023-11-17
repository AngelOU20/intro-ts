//* INTERFACES
//Note: Es el molde del contrato que debe de tener ese objeto

interface Hero {
  id: string;
  name: string;
  age: number;
  saludar: () => void;
}

const hero: Hero = {
  id: '1',
  name: 'Thor',
  age: 1500,
  saludar: () => {
    console.log('Hola');
  },
};

//* Una interfaz dentro de una interfaz
interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface ShoppingCart {
  totalPrice: number;
  products: (Product | Shoes)[];
}

const shoppingCart: ShoppingCart = {
  totalPrice: 100,
  products: [
    {
      id: '1',
      name: 'macbook',
      price: 1000,
      quantity: 1,
    },
    {
      id: '2',
      name: 'nike',
      price: 100,
      quantity: 1,
      size: 9,
    },
  ],
};

//* Con las interfaces tambien podemos extender
interface Shoes extends Product {
  size: number;
}

const shoes: Shoes = {
  id: '2',
  name: 'white shoes',
  price: 20,
  quantity: 4,
  size: 8,
};

//* Indicar funciones en interfaces
//? Las interfaces pueden crearse otras con el mismo nombre y al momento de utilizarla, estas se juntan
// interface cartOps {
//   add: (product: Product) => void;
//   remove: (id: string) => void;
//   clear: () => void;
// }

interface CartOps {
  add(product: Product): void;
  remove(id: string): void;
}

interface CartOps {
  clear(): void;
}

//? Obtienen las dos propiedades de las interfaces
const ops: CartOps = {
  add: (product: Product) => {},
  remove: (id: string) => {},
  clear: () => {},
};
