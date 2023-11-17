//* INTERSECTION TYPES
//Note: Nos permite extender tipos

type HeroeId = `${string}-${string}-${string}-${string}-${string}`;

//Note: Para realizar los union types agregamos '|'
type HeroPowerScale =
  | 'local'
  | 'planetary'
  | 'galactic'
  | 'universal'
  | 'omnipresent';

type HeroBasicInfo = {
  name: string;
  age: number;
};

type HeroProperties = {
  readonly id?: HeroeId;
  isActive?: boolean;
  powerScale?: HeroPowerScale;
};

//Note: Asi agregamos dos tipos a uno solo
type Hero = HeroBasicInfo & HeroProperties;

let heroe: Hero = {
  name: 'Thor',
  age: 1500,
};

function createHeroe(input: HeroBasicInfo): Hero {
  const { name, age } = input;
  return {
    id: crypto.randomUUID(),
    name,
    age,
    isActive: true,
  };
}

const ironman = createHeroe({ name: 'Ironman', age: 35 });
ironman.powerScale = 'local';

//* OTHER OPCTION
const enableAnimationDuration: boolean | number = 200; // 200ms o true
