// Seleciona todas as cartas da página
const cartas = document.querySelectorAll(".flip-card");

// Percorre cada carta individualmente
cartas.forEach((carta) => {

    // Adiciona um evento de clique em cada carta
    carta.addEventListener("click", () => {

         // Alterna a classe responsável pelo giro
         const virada = carta.classList.toggle("is-flipped");

         // Atualiza o estado acessível do botão
         carta.setAttribute("aria-pressed", virada);
    });

});
