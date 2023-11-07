const preenche = (atletaID) => {
    const container = document.createElement('article');
    const espaco_nome = document.createElement('h3');
    const espaco_imagem = document.createElement('img');
    const espaco_descricao = document.createElement(`p`);
    
    const infoAtletas = atletas[atletaID];

    espaco_nome.innerHTML = infoAtletas.nome;
    espaco_imagem.src = infoAtletas.imagem;
    espaco_descricao.innerHTML = infoAtletas.descricao;

    container.appendChild(espaco_nome);
    container.appendChild(espaco_imagem);
    container.appendChild(espaco_descricao);

    document.body.appendChild(container);
}

atletas.forEach((atleta, index) => {
    preenche(index);
});
