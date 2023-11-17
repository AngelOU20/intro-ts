//* ARRAYS
// const languajes: string[] = []; //? Con string[], nos permite un arreglo de strings
// const languajes: Array<any> = []; //? Con any, nos permite agregar diferentes tipos al arreglo

const languajes: (string | number)[] = []; //? Para agregar 2 tipos en un arreglo

//Note: Por la inferencia de datos no me permite meter un string a un arreglo vacio '[]'
languajes.push('JavaScript');
languajes.push('TypeScript');
languajes.push('Java');
languajes.push(2);
// languajes.push(true); //! Ese tipo no es asignable

type HeroBasicInfo = {
  id?: number;
  name: string;
  age: number;
};

//Note: Podemos tener un array de nuestro tipo de datos
const heroWithBasicInfo: HeroBasicInfo[] = [];

heroWithBasicInfo.push({ name: 'superman', age: 30 });
heroWithBasicInfo.push({ name: 'batman', age: 34 });
