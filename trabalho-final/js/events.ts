import { PlayerType, getPlayers, loadData } from "./data";

export const bindHoverEvents = () => {
  document.querySelectorAll('.player-card').forEach(card => {
    const description = card.querySelector('.player-description') as HTMLElement;
    
    card.addEventListener('mouseenter', () => {
      description.style.maxHeight = `${description.scrollHeight}px`;
    });

    card.addEventListener('mouseleave', () => {
      description.style.maxHeight = '60px'; 
    });
  });
}

document.getElementById('playertype-selector')?.addEventListener('change', async () => {
  const playerType: PlayerType = (document.getElementById('playertype-selector') as HTMLSelectElement).value as PlayerType;
  
  const players = await getPlayers(playerType);
  console.log(players);
  
  loadData(players);
  bindHoverEvents();
});
