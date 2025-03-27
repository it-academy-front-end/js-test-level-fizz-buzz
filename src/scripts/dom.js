/**
 * Responsabilidad: gestionar el los flujos de que recibe y muestra la interfáz
 * */ 

const input = document.getElementById('itemInput');
const button = document.getElementById('addItemBtn');
const listUl = document.getElementById('itemList');

button.addEventListener('click', ()=> {
    if (input.value != "") {
        const dynamicLi = document.createElement('li');
        dynamicLi.textContent = input.value;
        listUl.appendChild(dynamicLi);
        input.value = "";
    }
});
