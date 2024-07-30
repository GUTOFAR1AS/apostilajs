"use strict";

// Seleciona todos os elementos <p> na página
const p = document.querySelectorAll("p");

// Itera sobre cada elemento <p> e aplica estilos
p.forEach((element, index) => {
    element.style.color = "#FFF"; // Define a cor do texto como branco
    element.style.padding = "20px"; // Corrige o erro de digitação e define o padding

    // Aplica uma cor de fundo diferente com base no índice do elemento
    if (index === 0) {
        element.style.background = "blue";
    }

    if (index === 1) {
        element.style.background = "red";
    }

    // Exibe o índice e o elemento no console
    console.log(index, element);
});