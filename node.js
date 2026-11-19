//const carta = document.querySelectorAll('cartas');

//carta.addEventListener('click', () => {
  //carta.classList.toggle('flipped');
//});
//cartas.forEach((carta) => {
    //carta.addEventListener("click", () => {
        // girar da carta
        //carta.classList.toggle("is-flipped");
    //});
//});


// Seleciona todas as cartas da página
const cartas = document.querySelectorAll(".flip-card");

// Percorre cada carta individualmente
cartas.forEach((carta) => {

    // Adiciona um evento de clique em cada carta
    carta.addEventListener("click", () => {

        // Adiciona ou remove a classe responsável pelo giro
        carta.classList.toggle("is-flipped");

    });

});
