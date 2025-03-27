/**
 * Responsabilidad: gestionar el los flujos de que recibe y muestra la interfáz
 * */ 
//import {  } from "./events"

const input = document.getElementById('itemInput');
const button = document.getElementById('addItemBtn');
const listUl = document.getElementById('itemList');

const historial = [[]];
const numInput = 0;

button.addEventListener('click', (numInput)=> {
    if (input.value != "") {
        const dynamicLi = document.createElement('li');
        dynamicLi.textContent = input.value;
        listUl.appendChild(dynamicLi);
        input.value = "";
        return numInput;
    }
    
});


function fizzBuzz (num) {
    if(num % 3 === 0) {
        historial.push([num, 'Fizz']);
        console.log(historial);
    }
}

fizzBuzz(numInput);

