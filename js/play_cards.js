const cards = document.querySelectorAll('.cards__item');
let hasCardFlipped = false;
let blockLocked = false;
let firstCard, secondCard;

const flipCard = e => {
if (blockLocked) return;
const trgt= e.target.parentElement;

if (trgt === firstCard) return;
trgt.classList.add('flip');

if (!hasCardFlipped) {
    hasCardFlipped = true;
    firstCard = trgt;
}
else {
    hasCardFlipped = false;
    secondCard = trgt;
    checkForMatch();
}
};

const checkForMatch = () => {
    if (firstCard.dataset.framework === secondCard.dataset.framework) {
        firstCard.removeEventListener('click',flipCard);
        secondCard.removeEventListener('click',flipCard);
    }
    else {
        blockLocked = true;
       setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
         reset();
       }, 1000)
      
    }
}

const reset = () => {
    hasCardFlipped=blockLocked=false;
    firstCard=secondCard=null;
    }
const game = ()=> {
    cards.forEach(card => {
        card.addEventListener('click', flipCard);
        const rndmInex = Math.floor(Math.random()*cards.length);
        card.style.order = rndmInex;
    })
}

game()
const btnReStrt = document.getElementById('btnReStrt')
btnReStrt.addEventListener('click', restart = ()=> {
    for (let i = 0; i < cards.length; i++) {
    if (cards[i].classList.contains("flip")) {
        btnReStrt.setAttribute('disabled', false);
        cards[i].classList.remove("flip");
        game();
        } 
    else {
        btnReStrt.setAttribute('disabled', true)
    }
  }
 });
    
   
