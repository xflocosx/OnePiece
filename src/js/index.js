const piratasImages = {
    '01-luffy': [
        'src/imagens/01-luffy.png',
        'src/imagens/01-luffy2.png',
        'src/imagens/01-luffy3.png'
    ],
    '02-zoro': [
        'src/imagens/02-zoro.png',
        'src/imagens/02-zoro2.png',
        'src/imagens/02-zoro3.png'
    ],
    '03-nami': [
        'src/imagens/03-nami.png',
        'src/imagens/03-nami2.png',
        'src/imagens/03-nami3.png'
    ],
    '04-usopp': [
        'src/imagens/04-usopp.png',
        'src/imagens/04-usopp2.png',
        'src/imagens/04-usopp3.png'
    ],
    '05-sanji': [
        'src/imagens/05-sanji.png',
        'src/imagens/05-sanji2.png',
        'src/imagens/05-sanji3.png'
    ],
    '06-chopper': [
        'src/imagens/06-chopper.png',
        'src/imagens/06-chopper2.png',
        'src/imagens/06-chopper3.png'
    ],
    '07-robin': [
        'src/imagens/07-robin.png',
        'src/imagens/07-robin2.png',
        'src/imagens/07-robin3.png'
    ],
    '08-franky': [
        'src/imagens/08-franky.png',
        'src/imagens/08-franky2.png',
        'src/imagens/08-franky3.png'
    ],
    '09-brook': [
        'src/imagens/09-brook.png',
        'src/imagens/09-brook2.png',
        'src/imagens/09-brook3.png'
    ],
    '10-jinbe': [
        'src/imagens/10-jinbe.png',
        'src/imagens/10-jinbe2.png',
        'src/imagens/10-jinbe3.png'
    ]
    //Trocar o src para usar 3 imagens randômicas
};

const piratas = document.querySelectorAll('.pirata');

piratas.forEach((pirata) => {
    pirata.addEventListener('mouseover', () => {
        
        if (window.innerWidth < 450) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        removerSelecaoDopirata();

        pirata.classList.add('selecionado');

        alterarImagemPirataSelecionado(pirata);
        alterarNomePirataSelecionado(pirata);
        alterarDescricaoPirata(pirata);
    });
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
    const idpirata = pirata.attributes.id.value.toLowerCase();
    
    if (piratasImages[idpirata]) {
        const randomIndex = Math.floor(Math.random() * piratasImages[idpirata].length);
        const selectedImage = piratasImages[idpirata][randomIndex];
        imagemPirataGrande.src = selectedImage;
    } else {
        imagemPirataGrande.src = `./src/imagens/${idpirata}.png`;
    }
}
//Cada mouseover vou lodear uma imagem diferente, tem que testr se o random vai funcionar 

function removerSelecaoDopirata() {
    const pirataSelecionado = document.querySelector('.selecionado');
    if (pirataSelecionado) {
        pirataSelecionado.classList.remove('selecionado');
    }
}
