const espaco_nome = document.getElementById('nome');
const espaco_imagem = document.getElementById('imagem');
const espaco_descricao = document.querySelector(`article > p`);

const preenche = (atletaID) => {

    const infoAtletas = atletas[atletaID];

    espaco_nome.innerHTML = infoAtletas.nome;
    espaco_imagem.src = infoAtletas.imagem;
    espaco_descricao.innerHTML = infoAtletas.descricao;
}

preenche(4)
