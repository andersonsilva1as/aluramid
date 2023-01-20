function tocaSom(idSom){
    document.querySelector(idSom).play();
}
const listaDeTeclas = document.querySelectorAll('.tecla')

listaDeTeclas.forEach((tecla) => {
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    tecla.addEventListener('click', () => tocaSom(idAudio));
});

