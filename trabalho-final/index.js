"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("./data");
var fill = function (athlete) {
    var container = document.createElement('div');
    container.className = 'player-card';
    var title = document.createElement('h3');
    title.innerText = athlete.nome;
    title.className = 'player-name';
    var image = document.createElement('img');
    image.src = athlete.imagem;
    image.className = 'player-image';
    var description = document.createElement('p');
    description.innerText = athlete.descricao;
    description.className = 'player-description';
    container.appendChild(title);
    container.appendChild(image);
    container.appendChild(description);
    var gridContainer = document.querySelector('.grid-container');
    if (!gridContainer) {
        gridContainer = document.createElement('div');
        gridContainer.className = 'grid-container';
        document.body.appendChild(gridContainer);
    }
    gridContainer.appendChild(container);
};
data_1.player.forEach(function (athlete) { return fill(athlete); });
