import { Atleta, atletas } from "./dados";

function getAtletasFeminino(atletas: Atleta[]): Atleta[] {
  return atletas.filter(atleta => atleta.elenco === "feminino");
}

function getAtletasMasculino(atletas: Atleta[]): Atleta[] {
  return atletas.filter(atleta => atleta.elenco === "masculino");
}

function getAtletaById(atletas: Atleta[], id: number): Atleta {
  return atletas.filter(atleta => atleta.id === id)[0]
} 

console.log(atletas.length);
console.log(getAtletasFeminino(atletas).length);
console.log(getAtletasMasculino(atletas).length);
console.log(getAtletaById(atletas, 1));
