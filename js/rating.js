const stars = document.querySelectorAll('.star');
const emojiEl = document.querySelector('.emoji');
const statusEl = document.querySelector('.status');
const defaultRatingIndex = 0;
let currentRatingIndex = 0;

const ratings = [
    { emoji: '', name: 'Rate your experience with our website' },
    { emoji: '😔', name: 'Very Poor' },
    { emoji: '🙁', name: 'Poor' },
    { emoji: '🙂', name: 'Good' },
    { emoji: '🤩', name: 'Very Good' },
    { emoji: '🥰', name: 'Excellent' },
];

const checkSelectedStar = (star) => {
    if (parseInt(star.getAttribute('data-rate')) === currentRatingIndex) {
        return true;
    } else {
        return false;
    }
};

const setRating = (index) => {
    stars.forEach((star) => star.classList.remove('selected'));
    if (index > 0 && index <= stars.length) {
        document
            .querySelector('[data-rate="' + index + '"]')
            .classList.add('selected');
    }
    emojiEl.innerHTML = ratings[index].emoji;
    statusEl.innerHTML = ratings[index].name;
};

const resetRating = () => {
    currentRatingIndex = defaultRatingIndex;
    setRating(defaultRatingIndex);
};

stars.forEach((star) => {
    star.addEventListener('click', function () {
        if (checkSelectedStar(star)) {
            resetRating();
            return;
        }
        const index = parseInt(star.getAttribute('data-rate'));
        currentRatingIndex = index;
        setRating(index);
        setTimeout(() => {
            document.querySelector(
                '.rating'
            ).innerHTML = `<div>Thank you for your feedback!</div>
            <img src='./assets/icon.ico' alt='cat'>`;
        }, 1500);
        document.querySelector('.rating').style.color = 'gold';
    });

    star.addEventListener('mouseover', function () {
        const index = parseInt(star.getAttribute('data-rate'));
        setRating(index);
    });

    star.addEventListener('mouseout', function () {
        setRating(currentRatingIndex);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    setRating(defaultRatingIndex);
});
