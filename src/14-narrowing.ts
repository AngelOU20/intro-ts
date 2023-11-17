//* NARROWING
function mostrarLongitud(objecto: string | number) {
  if (typeof objecto === 'string') {
    return objecto.length;
  }

  return objecto.toString().length;
}

mostrarLongitud('1');

//* OTHER NARROWING EXAMPLE
// interface Mario {
//   company: 'Nintendo';
//   name: string;
//   jump: () => void;
// }

// interface Sonic {
//   company: 'Sega';
//   name: string;
//   run: () => void;
// }

// type Character = Mario | Sonic;

// function play(character: Character) {
//   if (character.company === 'Nintendo') {
//     character.jump();
//     return;
//   }

//   character.run();
// }

//* UTILIZAR TYPE GUARD
interface Mario {
  name: string;
  jump: () => void;
}

interface Sonic {
  name: string;
  run: () => void;
}

type Character = Mario | Sonic;

//* TYPE GUARD
function checkIsSonic(character: Character): character is Sonic {
  return (character as Sonic).run !== undefined;
}

// Hay que evitar los TYPE GUARD
function play(character: Character) {
  if (checkIsSonic(character)) {
    character.run();
  }
}

//* NEVER TYPE - TIPO NEVER
function fn(x: string | number) {
  if (typeof x === 'string') {
    // x es string
    x.toUpperCase();
  } else if (typeof x === 'number') {
    // x es number
    x.toFixed(2);
  } else {
    x; // never
  }
}
