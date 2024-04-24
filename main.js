const cartas = [
    { nombre: 'Joker', imagen: './img/Joker.png' },
    { nombre: 'As de corazones', imagen: './img/Ace-Spades.jpg' },
];

const card = document.querySelector('#card');
const frontImage = document.querySelector('#front');


function seleccionarCartaRandom() {
    const indiceRandom = Math.floor(Math.random() * cartas.length);
    return cartas[indiceRandom];
}


card.addEventListener('click', () => {
    const cartaSeleccionada = seleccionarCartaRandom();
    front.src = cartaSeleccionada.imagen;
    front.alt = cartaSeleccionada.nombre;
    card.classList.toggle('flip');
});