//const carta = document.getElementById('cartas');

//carta.addEventListener('click', () => {
  //carta.classList.toggle('flipped');
//});
cartas.forEach((carta) => {
    carta.addEventListener("click", () => {
        // girar da carta
        carta.classList.toggle("is-flipped");
    });
});