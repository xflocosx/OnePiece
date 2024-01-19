const piratas = document.querySelectorAll('.pirata');

piratas.forEach((pirata) => {
    pirata.addEventListener('mouseenter', () => {
        
        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth'})
        }

        removerSelecaoDopirata();

        pirata.classList.add('selecionado');


        alterarImagemPirataSelecionado(pirata);

        alterarNomePirataSelecionado(pirata);

        alterarDescricaoPirata(pirata);
    })
});




function alterarNomePirataSelecionado(pirata) {
    const nomepirata = document.getElementById('nome-pirata');
    nomepirata.innerText = pirata.getAttribute('data-name');
}

function alterarDescricaoPirata(pirata) {
    const descricaoPirata = document.getElementById('descricao-pirata');
    descricaoPirata.innerText = pirata.getAttribute('data-description');
}

function alterarImagemPirataSelecionado(pirata) {
    const imagemPirataGrande = document.querySelector('.pirata-grande');
    const idpirata = pirata.attributes.id.value;
    imagemPirataGrande.src = `./src/imagens/${idpirata}.png`;
}

function removerSelecaoDopirata() {
    const pirataSelecionado = document.querySelector('.selecionado');
    pirataSelecionado.classList.remove('selecionado');
}