//* MATRICES AND TUPLES

/*
  [
    ['X', 'O', 'X'], // <---- string[] 
    ['O', 'X', 'X'], // <---- string[]
    ['O', 'O', 'X']  // <---- string[]
  ]
*/

type CellValue = 'X' | 'O' | '';

//! Aca tenemos un error, porque podemos agregar más filas y columnas
// const gameBoard: CellValue[][] = [
//   ['X', 'O', 'X', 'X'],
//   ['O', 'X', 'X'],
//   ['O', 'O', 'X'],
// ];

// gameBoard[0][1] = 'O122'; //! Ese tipo no es asignable a CellValue

//Note: Para solucionarlo agregamos un nuevo tipo
//Note: Para esto usamos una TUPLA
//? Una tupla es un array que tiene un limite fijado de longitud
type GameBoard = [
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue]
];

const gameBoard: GameBoard = [
  ['X', 'O', 'X'],
  ['O', 'X', 'X'],
  ['O', 'O', 'X'],
];

//* TUPLES
// El useState en react, es considerado una tupla en ts
type State = [string, (name: string) => void];
// const [hero, setHero] = useState('Thor'); //? <-- [hero, setHero] seria una tupla

// Otro caso, seria lo colores RGB
type RGB = [number, number, number]; //? Lo tipamos como una tupla
const rgb: RGB = [255, 255, 0]; // 0 - 255
