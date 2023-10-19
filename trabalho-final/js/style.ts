export const bindHoverEvents = () => {
  document.querySelectorAll('.player-card').forEach(card => {
    const description = card.querySelector('.player-description') as HTMLElement;
    
    card.addEventListener('mouseenter', () => {
      description.style.maxHeight = `${description.scrollHeight}px`;
    });

    card.addEventListener('mouseleave', () => {
      description.style.maxHeight = '60px'; // or whatever your default minimized height is
    });
  });
}
