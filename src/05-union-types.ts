//* UNION TYPES
type HeroeId = `${string}-${string}-${string}-${string}-${string}`;

//Note: Para realizar los union types agregamos '|'
type HeroPowerScale =
  | 'local'
  | 'planetary'
  | 'galactic'
  | 'universal'
  | 'omnipresent';

type Heroe = {
  readonly id?: HeroeId;
  name: string;
  age: number;
  isActive?: boolean;
  powerScale?: HeroPowerScale;
};

let heroe: Heroe = {
  name: 'Thor',
  age: 1500,
};

function createHeroe(heroe: Heroe): Heroe {
  const { name, age } = heroe;
  return {
    id: crypto.randomUUID(),
    name,
    age,
    isActive: true,
  };
}

const ironman = createHeroe({ name: 'Ironman', age: 35 });
ironman.powerScale = 'local';

//* OTHER OPTION
const enableAnimationDuration: boolean | number = 200; // 200ms o true
