/**
 * Responsabilidad: gestionar el los flujos de que recibe y muestra la interfáz
 * */
//import {  } from "./fizzBuzz"

const input = document.getElementById('itemInput');
const button = document.getElementById('addItemBtn');
const listUl = document.getElementById('itemList');

historial = [[]];
let resp = "";

button.addEventListener('click', () => {
    if (input.value != "") {
        const respuesta = fizzBuzz(input.value);
        historial.push([respuesta.data.number, respuesta.data.result]);
        console.log(historial);
        const dynamicLi = document.createElement('li');
        dynamicLi.textContent = `${respuesta.data.number} , ${respuesta.data.result}`;
        listUl.appendChild(dynamicLi);
        value = "";
    }
});


function fizzBuzz(num) {
    if (num != 0) {
        if (num % 3 === 0 && num % 5 == 0) {
            resp = {
                status: "ok", // Código indicando éxito o error
                message: "El número es divisible por 3 y por 5", // Mensaje
                data: {
                    number: num, // Número evaluado
                    result: 'FizzBuzz' // Resultado esperado
                }
            };
            return resp;

        } else if (num % 3 === 0) {
            resp = {
                status: "ok", // Código indicando éxito o error
                message: "El número es divisible por 3", // Mensaje
                data: {
                    number: num, // Número evaluado
                    result: 'Fizz' // Resultado esperado
                }
            };
            return resp;

        } else if (num % 5 === 0) {
            resp = {
                status: "ok", // Código indicando éxito o error
                message: "El número es divisible por 3", // Mensaje
                data: {
                    number: num, // Número evaluado
                    result: 'Buzz' // Resultado esperado
                }
            };
            return resp;

        } else {
            resp = {
                status: "error", // Código indicando éxito o error
                message: "Número no es divisible por 3 ni 5", // Mensaje
                data: {
                    number: num, // Número evaluado
                    result: 'Número no es divisible por 3 ni 5' // Resultado esperado
                }
            };
            return resp;
        }
    }
}
/*
{
    status: "ok", // Código indicando éxito o error
    message: "El número es divisible por 3", // Mensaje
    data: {
        number: num, // Número evaluado
        result: 'Fizz' // Resultado esperado
        }
}*/