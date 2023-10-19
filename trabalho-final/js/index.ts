import { Player, players, getPlayers } from './data';
import { fill } from './fill';
import { bindHoverEvents } from './style';

getPlayers().then((players: Player[]) => {
  players.forEach((player: Player) => fill(player));
  bindHoverEvents();
}).catch((error: Error) => {
  console.error(error);
});


// players.forEach((player: Player) => fill(player));
