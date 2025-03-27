import { expect, describe, test } from "@jest/globals";
import { fizzBuzz } from "../src/fizzBuzz";

const { fizzBuzz } = require('../src/fizzBuzz'); 

describe('FizzBuzz test for multiples of 3 and 5', () => {
       
        test('returns Fizz when multiple of 3', () => {
            // Gherking test
            /**
             * Scenario: Número divisible por 3
             * Given un número 9
             * When el número es procesado
             * Then se muestra "Fizz"
             */

            // Arrange: Preparar el escenario
            let valor_entrada = 9;
            let respuesta_esperada = {
                status: "ok", // Código indicando éxito
                message: "El número es divisible por 3", // Mensaje de validación
                data: {
                    input: 9,  // Número evaluado
                    output: "Fizz" // Resultado esperado
                }}

            // Act: ejecutar el escenario
            let resultado = fizzBuzz(valor_entrada);
        
            // Assert: Comprobar el escenario
            expect(typeof resultado.data.input).toBe("number"); // valida que input sea un número
            expect(resultado).toEqual(respuesta_esperada); // valida estructura de respuesta
            expect(resultado.data.output).toBe("Fizz"); // valida que el valor output corresponda al expect
        });

        test('returns Buzz when multiple of 5', () => {
            //Gherking test
            /**
             * Scenario: Número divisible por 5
             * Given un número 10
             * When el número es procesado
             * Then se muestra "Buzz"
             */

            // Arrange
            let valor_entrada = 5;
            let respuesta_esperada = {
                status: "ok", // Código indicando éxito
                message: "El número es divisible por 5", // Mensaje de validación
                data: {
                    input: 5,  // Número evaluado
                    output: "Buzz" // Resultado esperado
                }}

            // Act
            let resultado = fizzBuzz(valor_entrada);
            // Assert
            expect(typeof resultado.data.input).toBe("number"); // valida que input sea un número
            expect(resultado).toEqual(respuesta_esperada); // valida estructura de respuesta
            expect(resultado.data.output).toBe("Buzz"); // valida que el valor output corresponda al expect
    
        })

        test('returns FizzBuzz when multiple of 3 and 5', () => {
            //Gherking test
            /**
             * Scenario: Número divisible por 3 y 5
             * Given un número 15
             * When el número es procesado
             * Then se muestra "FizzBuzz"
             */
            // Arrange
            let valor_entrada = 15;
            let respuesta_esperada = {
                status: "ok", // Código indicando éxito
                message: "El número es divisible por 3 y 5", // Mensaje de validación
                data: {
                    input: 15,  // Número evaluado
                    output: "FizzBuzz" // Resultado esperado
                }}

            // Act
            let resultado = fizzBuzz(valor_entrada);
            // Assert
            expect(typeof resultado.data.input).toBe("number"); // valida que input sea un número
            expect(resultado).toEqual(respuesta_esperada); // valida estructura de respuesta
            expect(resultado.data.output).toBe("FizzBuzz"); // valida que el valor output corresponda al expect
        })

        test('returns number when is not multiple of 3 and 5', () => {
            //Gherking test
            /**
             * Scenario: Número no divisible por 3 ni 5
             * Given un número 8
             * When el número es procesado
             * Then se muestra el número ingresado
             */
             // Arrange
             let valor_entrada = 8;
             let respuesta_esperada = {
                 status: "ok", // Código indicando éxito
                 message: "Número no es divisible por 3 ni 5", // Mensaje de validación
                 data: {
                     input: 8,  // Número evaluado
                     output: "Número no es divisible por 3 ni 5" // Resultado esperado
                 }}
 
             // Act
             let resultado = fizzBuzz(valor_entrada);
             // Assert
             expect(typeof resultado.data.input).toBe("number"); // valida que input sea un número
             expect(resultado).toEqual(respuesta_esperada); // valida estructura de respuesta
             expect(resultado.data.output).toBe(""); // valida que el valor output corresponda al expect
        })
    }
)