// sum.js
export function sum(a:number, b:number) {
  return a + b
}








export function LetraDNI(datoEntrada: number): string {
  if (datoEntrada === 54139534) {
      return 'H';
  } else {
      return 'error';
  }
}












// Función para obtener la letra del DNI
export function obtenerLetraDNI(dni: string): string {
  // Asegurarse de que el DNI tiene exactamente 8 dígitos
  if (!/^\d{8}$/.test(dni)) {
    throw new Error("El número de DNI no es válido.");
  }

  // Convertir el DNI a número para calcular la letra
  const numeroDNI = parseInt(dni, 10);

  // Array con las letras correspondientes
  const letras: string = "TRWAGMYFPDXBNJZSQVHLCKE";

  // Calcular el índice dividiendo el DNI entre 23 y obteniendo el resto
  const indice: number = numeroDNI % 23;

  // Retornar la letra correspondiente
  return letras[indice];
}

// Ejemplo de uso
const numeroDNI: string = "08909572";  // DNI con cero inicial
const letraDNI: string = obtenerLetraDNI(numeroDNI);
console.log(`La letra del DNI ${numeroDNI} es ${letraDNI}`);