// sum.test.js
import { expect, test, describe } from 'vitest'
import { sum } from './dni.ts'

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})


import { LetraDNI,  } from './dni.ts';


describe('obtenerLetra', () => {
    test('debería retornar la letra H cuando el dato de entrada es 54139534', () => {
        // Arrange: 
        const datoEntrada = 54139534;
        const salidaEsperada = 'H';
        

        // Act: 
        const resultado = LetraDNI(datoEntrada);


        // Assert:
        expect(resultado).toBe(salidaEsperada);
    });
});











import { obtenerLetraDNI,  } from './dni.ts';


describe('Obtener letra del DNI', () => {
  test('Debe devolver la letra correcta para un DNI válido', () => {
    expect(obtenerLetraDNI('54139534')).toBe('H');
    expect(obtenerLetraDNI('08909572')).toBe('Q'); // DNI con cero inicial
  });

  test('Debe lanzar un error si el DNI no es válido', () => {
    expect(() => obtenerLetraDNI('-12345678')).toThrow(Error); // DNI negativo
    expect(() => obtenerLetraDNI('1234567890')).toThrow(Error); // DNI con más de 8 dígitos
    expect(() => obtenerLetraDNI('1234')).toThrow(Error);       // DNI con menos de 8 dígitos
    expect(() => obtenerLetraDNI('ABCDE123')).toThrow(Error);   // DNI con caracteres no numéricos
  });
});