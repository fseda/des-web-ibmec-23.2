import { bindHoverEvents } from "./events";
import { fill } from "./fill";

export type Player = {
  id: number;
  elenco: string;
  nome: string;
  posicao: string;
  imagem: string;
  descricao: string;
  nome_completo: string;
  nascimento: string;
  altura: string;
}

export type PlayerType = String;
const men: PlayerType = "masculino";
const women: PlayerType = "feminino";
const all: PlayerType = "all";

export async function getPlayers(playerType: PlayerType): Promise<Player[]> {
  try {
    const response = await fetchPlayers(playerType);
    if (!response.ok) {
      throw new Error(`HTTP error. Status ${response.status}`);
    }

    return await response.json();
  } catch (e) {
    console.error(e);
    return [];
  }
}

export async function fetchPlayers(playerType: PlayerType): Promise<Response> {
  const baseUrl = 'https://botafogo-atletas.mange.li';
  const response = await fetch(`${baseUrl}/${playerType}`);
  return response
}

export function loadData(players: Player[]) {
  var gridContainer = document.querySelector('.grid-container') as HTMLElement;
  gridContainer.innerHTML = '';
  players.forEach(player => fill(player));
} 

export async function loadInitialData() {
  const players = await getPlayers(all);
  loadData(players);
  bindHoverEvents();
}
