
const cardsData = [
  { id: 1, texto: "Relevancia" },
  { id: 1, texto: "La información debe ser útil para la toma de decisiones" },
  { id: 2, texto: "Confiabilidad" },
  { id: 2, texto: "La información debe ser veraz y comprobable" },
  { id: 3, texto: "Comparabilidad" },
  { id: 3, texto: "Permite comparar la información entre diferentes periodos o empresas" },
  { id: 4, texto: "Objetividad" },
  { id: 4, texto: "La información debe basarse en hechos verificables, no opiniones" },
  { id: 5, texto: "Cuantitativa" },
  { id: 5, texto: "Se puede medir en números, como ventas o costos" },
  { id: 6, texto: "Cualitativa" },
  { id: 6, texto: "Describe cualidades o características, como claridad o relevancia" },
  { id: 7, texto: "Oportunidad" },
  { id: 7, texto: "La información debe estar disponible cuando se necesite para decidir" },
  { id: 8, texto: "Comprensibilidad" },
  { id: 8, texto: "La información debe ser clara y fácil de entender para los usuarios" }
];

let cards = [...cardsData].sort(() => Math.random() - 0.5);

const gameBoard = document.getElementById("gameBoard");
const scoreElement = document.getElementById("score");

let flippedCards = [];
let matchedCards = [];
let score = 0;


cards.forEach((carta, index) => {
  const div = document.createElement("div");
  div.classList.add("card");
  div.dataset.id = carta.id; 
  div.textContent = carta.texto;
  div.addEventListener("click", flipCard);
  gameBoard.appendChild(div);
});


function flipCard(e) {
  const card = e.target;
  if (
    card.classList.contains("flipped") ||
    card.classList.contains("matched") ||
    flippedCards.length === 2
  ) return;

  card.classList.add("flipped");
  flippedCards.push(card);

  if (flippedCards.length === 2) {
    checkMatch();
  }
}


function checkMatch() {
  const [card1, card2] = flippedCards;
  if (card1.dataset.id === card2.dataset.id) { 
    card1.classList.add("matched");
    card2.classList.add("matched");
    matchedCards.push(card1, card2);
    score++;
    scoreElement.textContent = `Puntos: ${score}`;
  } else {
    setTimeout(() => {
      card1.classList.remove("flipped");
      card2.classList.remove("flipped");
    }, 800);
  }
  flippedCards = [];
}
