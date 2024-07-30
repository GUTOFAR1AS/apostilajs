"use strict";

// Seleciona o elemento <h1>
const h1 = document.querySelector('h1'); // TAG HTML5

// Seleciona elementos de parágrafo por classe e ID
const classP = document.querySelector(".paragrafo");
const idP = document.querySelector("#paragrafo");

// Exibe os elementos selecionados no console
console.log(h1);
console.log(classP.querySelector("strong")); // Note: 'strong' deve ser em minúsculas
console.log(idP);

// Inicializa um temporizador
let timer = 0;

// Seleciona o elemento <title>
const title = document.querySelector('title');

// Configura um intervalo para atualizar o texto do elemento <title> a cada segundo
setInterval(() => {
    title.textContent = timer; // Use textContent para melhor desempenho
    timer++;
}, 1000);
