import { Player, PlayerType, getPlayers, loadInitialData } from './data';
import { fill } from './fill';
import { bindHoverEvents } from './events';

loadInitialData().then(() => {
  bindHoverEvents();
  console.log('Initial data loaded');
  
}).catch(e => {
  console.error(e);
});
