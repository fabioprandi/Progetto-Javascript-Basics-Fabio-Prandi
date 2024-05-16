const title = document.createElement('h1');
title.id = 'title';
title.textContent = "Counter";
document.body.appendChild(title);

const resultDiv = document.createElement('div');
resultDiv.id = 'results';
resultDiv.textContent = 0;
document.body.appendChild(resultDiv);

const buttonpiu = document.createElement('button');
buttonpiu.textContent = '+';
buttonpiu.addEventListener('click', incrementa);
document.body.appendChild(buttonpiu);

const buttonmeno = document.createElement('button');
buttonmeno.textContent = '-';
buttonmeno.addEventListener('click', decrementa);
document.body.appendChild(buttonmeno);

function incrementa() {
const result = document.getElementById('results');
let count = parseInt(result.textContent);
count++;
result.textContent = count;
}

function decrementa() {
const result = document.getElementById('results');
let count = parseInt(result.textContent);
count--;
result.textContent = count;
}