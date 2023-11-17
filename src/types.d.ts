//* SOLO PARA TYPES O INTERFACES
export interface Mario {
  name: string;
  jump: () => void;
}

export interface Sonic {
  name: string;
  run: () => void;
}

export type Hero = {
  name: string;
  age: number;
};

export type HeroPowerScale =
  | 'local'
  | 'planetary'
  | 'galactic'
  | 'universal'
  | 'omnipresent';

//* No permite código que no sea interface o types
// function createHero(hero: Hero): Hero {
//   const { name, age } = hero;
//   return { name, age };
// }
