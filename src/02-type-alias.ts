//* TYPE ALIAS
//Note: Los types alias siempre se escriben en PascalCase
type Hero = {
  name: string;
  age: number;
};

let hero: Hero = {
  name: 'Thor',
  age: 1500,
};

// function createHero(name: string, age: number): Hero {
//   return { name, age };
// }

// const spiderman = createHero('Spiderman', 8);

//Note: Tambien podemos pasar el tipo Hero como parametro
function createHero(hero: Hero): Hero {
  const { name, age } = hero;
  return { name, age };
}

const spiderman = createHero({ name: 'Spiderman', age: 18 });
