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
        historial.push([input.value, respuesta]);
        console.log(historial);
        const dynamicLi = document.createElement('li');
        dynamicLi.textContent = `${input.value} , ${respuesta}`;
        listUl.appendChild(dynamicLi);
        value = "";
    }
});




function fizzBuzz(num) {
    if (num != 0) {
        if (num % 3 === 0 && num % 5 == 0) {
            resp = 'FizzBuzz';
            return resp;
        } else if (num % 3 === 0) {
            resp = 'Fizz';
            return resp;
        } else if (num % 5 === 0) {
            resp = 'Buzz';
            return resp;
        } else {
            return 'no es multiplo';
        }
    }
}