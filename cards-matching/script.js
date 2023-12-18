const images = [
    '🍎', '🍎',
    '🍌', '🍌',
    '🍒', '🍒',
    '🍇', '🍇',
    '🍊', '🍊',
    '🍓', '🍓',
    '🍍', '🍍'
];

let shuffledImages = shuffleArray(images);
let flippedCards = [];

function createCard(image, index) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.index = index;

    const front = document.createElement('div');
    front.classList.add('front');
    front.innerHTML = '?';

    const back = document.createElement('div');
    back.classList.add('back');
    back.innerHTML = image;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', flipCard);
    return card;
}

function createGameBoard() {
    const gameContainer = document.getElementById('game-container');

    shuffledImages.forEach((image, index) => {
        const card = createCard(image, index);
        gameContainer.appendChild(card);
    });
}

function flipCard() {
    if (flippedCards.length < 2) {
        const card = this;
        card.classList.add('flipped');
        flippedCards.push(card);

        if (flippedCards.length === 2) {
            setTimeout(checkMatch, 1000);
        }
    }
}

function checkMatch() {
    const [card1, card2] = flippedCards;

    const index1 = card1.dataset.index;
    const index2 = card2.dataset.index;

    if (shuffledImages[index1] === shuffledImages[index2]) {
        // Match found, keep the cards flipped
        flippedCards = [];
    } else {
        // No match, flip cards back
        flippedCards.forEach(card => card.classList.remove('flipped'));
        flippedCards = [];
    }
}


function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}

document.addEventListener('DOMContentLoaded', () => {
    createGameBoard();
});
