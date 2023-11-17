//* OPTIONAL PROPERTIES
//Note: Para agregar una propiedad opcional tenemos que agregar "?" después de una propiedad
type Hero = {
  readonly id?: number; // No podemos cambiar la propiedad
  name: string;
  age: number;
  isActive?: boolean;
};

let hero: Hero = {
  name: 'Thor',
  age: 1500,
};

function createHero(hero: Hero): Hero {
  const { name, age } = hero;
  return { name, age, isActive: true };
}

const spiderman = createHero({ name: 'Spiderman', age: 18 });
console.log(spiderman.isActive); // --> Nos devuelve un true

//* ENCADENAMIENTO OPCIONAL - OPCTIONAL CHAINING OPERATOR
//Note: id?. Esto significa que si tiene una id ejecutara el método, pero si no lo tiene no lo hará
spiderman.id?.toString();

//* MUTABILIDAD
//Note: Para no realizar la mutabilidad, podemos agregar readonly a la propiedad que no queremos que sea modificada
// spiderman.id = 2032143204234234; //! No se puede mutar

//* OBJECT FREEZE
//Note: El Object.freeze hace que no se pueda mutar el objeto (TODO EL OBJETO, NO SOLO UNA PROPIEDAD)
const spiderman2 = Object.freeze(createHero({ name: 'Spiderman', age: 18 }));

// spiderman2.id = 21333214325234532; //! No se puede mutar
// spiderman2.name = 'Venon'; //! No se puede mutar
