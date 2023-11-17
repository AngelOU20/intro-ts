//* ENUMS

//Note: Aparte de mejorar la legibilidad, también podemos exportarlo (Esto se realiza en JS) y en TS utilizaremos los enums
// const ERROR_TYPES = {
//   NOT_FOUND: 'notFound',
//   UNAUTHORIZED: 'unauthorized',
//   FORBIDDEN: 'forbidden',
// };

// function mostrarMensaje(tipoDeError) {
//   //Note: 'notFound' | 'unauthorized' | 'forbidden' son considerados magic strings, se recomienda evitar esto creando constantes.

//   if (tipoDeError === 'notFound') {
//     console.log('No se encuentra el recurso');
//   } else if (tipoDeError === 'unauthorized') {
//     console.log('No tienes permisos para acceder');
//   } else if (tipoDeError === 'forbidden') {
//     console.log('No tienes permisos');
//   }

//  //Note: Utilizando con constantes

//   if (tipoDeError === ERROR_TYPES.NOT_FOUND) {
//     console.log('No se encuentra el recurso');
//   } else if (tipoDeError === ERROR_TYPES.UNAUTHORIZED) {
//     console.log('No tienes permisos para acceder');
//   } else if (tipoDeError === ERROR_TYPES.FORBIDDEN) {
//     console.log('No tienes permisos');
//   }
// }

//? En TypeScript, lo mejor sería utilizar los enums

// Para no generar tanto código, podemos agregar 'const' al inicio del 'enum'
const enum ERROR_TYPES {
  NOT_FOUND = 'notFound',
  UNAUTHORIZED = 'unauthorized',
  FORBIDDEN = 'forbidden',
}

function mostrarMensaje(tipoDeError: string) {
  if (tipoDeError === ERROR_TYPES.NOT_FOUND) {
    console.log('No se encuentra el recurso');
  } else if (tipoDeError === ERROR_TYPES.UNAUTHORIZED) {
    console.log('No tienes permisos para acceder');
  } else if (tipoDeError === ERROR_TYPES.FORBIDDEN) {
    console.log('No tienes permisos');
  }
}

mostrarMensaje('notFound');
