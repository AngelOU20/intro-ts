//* TYPE ASSERTIONS - ASERCIONES DE TIPOS
const canvas = document.getElementById('canvas'); // con as HTMLCanvasElement ahora canvas es un HTMLCanvasElement, esto es una aserción pero no es recomendado

// Como sabe TS qye realmente estas recuperando un elemneto <canvas />

//Note: Se recomienda hacerlo en este punto --> Inferencia: TS se da cuenta que dentro del if ya solo el canvas va a poder ser un HTMLCanvasElement

//* INSTANCEOF
if (canvas instanceof HTMLCanvasElement) {
  // Puede devolver null o HTMLElement pero nosotros queremos ser más especificos
  // const ctx = (canvas as HTMLCanvasElement).getContext('2d'); // Tampoco se recomienda
  const ctx = canvas.getContext('2d');
}

//? typeof --> para tipos (strings, booleans, numbers, etc)
//? instanceof --> para instancias (fechas, etc)
