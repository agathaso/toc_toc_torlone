const esquerda = document.querySelector(".esquerda");
const direita = document.querySelector(".direita");
const itens = document.querySelector(".carrossel-items");

direita.onclick = () => {
    itens.scrollBy({ left: 150, behavior: "smooth" });
};

esquerda.onclick = () => {
    itens.scrollBy({ left: -150, behavior: "smooth" });
};