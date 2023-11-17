//* VARIABLES - DATA TYPES
let firstName1: string = 'Julio';
let lastName: any = 'Ucharima';
let city: unknown = 'Lima';
let age: number = 2;

//* OBJECTS
const person = {
  firstName: 'Julio Angel',
  lastName: 'Ucharima',
  age: 23,
};

//* INFERENCIA DE DATOS - DATA INFERENCES
//Note: Inferir es decir que typescript es capas de observar el tipo y decirnos su forma
person.firstName = 'Julio';
person.age = 22;

//Note: Te trae los métodos de los tipos que estan usando
firstName1.charAt(2);

//Note: Como a y b infiere que son number sin decirle nada
const a = 1;
const b = 2;
const c = a + b;

// ❌ firstName = 3
// ❌ firstName.propiedadInexistente

//* FUNCTIONS
function grettings(name: string): void {
  console.log(`Hola ${name}`);
}

grettings('Mariano');
// ❌ grettings(2);

function grett({ name, age }) {
  console.log(`Hola ${name}, tienes ${age} años`);
}

grett({ name: 'Julio', age: 20 });

//Note: Mucho cuidado al querer agregar el tipo de dato a los elementos dentro de un objeto, ya que en al agregar "name: string", ts lo toma como si estuviera renombrando la propiedad name
function grett2({ name: string, age }) {
  console.log(`Hola ${string}, tienes ${age} años`);
}

grett({ name: 'Julio', age: 20 });

//Note: La forma correcta seria agregar una interfaz

interface Grett {
  name: string;
  age: number;
}

function grett3({ name, age }: Grett) {
  console.log(`Hola ${name}, tienes ${age} años`);
}

//* SEGUNDA FORMA
function grett4({ name, age }: { name: string; age: number }): number {
  console.log(`Hola ${name}, tienes ${age} años`);
  return age;
}

//* USING FUNCTIONS AS PARAMETERS
//! Es un error tipar funciones como parámetro con Function
const sayHiFromFunction = (fn: Function): Function => {
  return fn('Angel');
};

sayHiFromFunction((name: string) => {
  console.log(`Hola ${name}`);
});

//Note: Lo correcto es decirle la función que necesitamos
const sayHiFromFunction2 = (fn: (name: string) => void) => {
  return fn('Angel');
};

sayHiFromFunction2((name: string) => {
  console.log(`Hola ${name}`);
});

//* TIPAR ARROW FUNCTIONS
const sum = (a: number, b: number): number => {
  return a + b;
};

//Note: Primero indicamos el tipo de la función y luego ponemos la función
const subtract: (a: number, b: number) => number = (a, b) => {
  return a - b;
};

//* NEVER - VOID
//Note: Se utiliza para funciones que sabemos que nunca van a devolver nada
function throwError(message: string): never {
  throw new Error(message);
}

function logMessage(message: string): void {
  console.log(message);
  // throw new Error(message);

  // return implicito <---- No devuelve nada
}

//Note: Las funciones no tienen inferencia
function multiply(a, b) {
  return a * b;
}

//* ARRAYS
const fruits = ['mango', 'platano', 'manzana', 'mandarina'];

//Note: Inferencia en funciones anónimas segun el contexto
fruits.forEach((fruit) => {
  console.log(fruit.toUpperCase()); //? Infiere q fruit es un string
});

//* OBJECTS - 2
let hero = {
  name: 'thor',
  age: 1500,
};

// hero.power = 1; No se puede agregar una nueva propiedad

function createHero(name: string, age: number) {
  return { name, age };
}

const thor = createHero('thor', 1500);
