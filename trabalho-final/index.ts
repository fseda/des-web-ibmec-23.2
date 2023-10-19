import { Player, player } from './data';

const fill = (athlete: Player) => {
  const container = document.createElement('div');
  container.className = 'player-card';

  const title = document.createElement('h3');
  title.innerText = athlete.nome;
  title.className = 'player-name';

  const image = document.createElement('img');
  image.src = athlete.imagem;
  image.className = 'player-image';

  const description = document.createElement('p');
  description.innerText = athlete.descricao;
  description.className = 'player-description';

  container.appendChild(title);
  container.appendChild(image);
  container.appendChild(description);

  let gridContainer = document.querySelector('.grid-container');
  if (!gridContainer) {
    gridContainer = document.createElement('div');
    gridContainer.className = 'grid-container';
    document.body.appendChild(gridContainer);
  }

  gridContainer.appendChild(container);
}

player.forEach(athlete => fill(athlete));
