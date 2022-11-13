import createElement from './modules/createElements.js';
import birdsData from './modules/sourceData.js';
import shuffle, { getRandomNumber } from './modules/shuffle.js';

import '../styles/quiz.scss';

let next__button = document.querySelector('.next-button');
let answers__list = document.querySelector('.answers-list');
let answers__items = document.querySelectorAll('.answers-list__item');
let question__img = document.querySelector('.question__image');
let question__about_name = document.querySelector('.question__about-name');



/** TESTING ... */
let currentQuestion = 0;
let targetId;
let shuffledArray = [];

currentQuestion = nextQuestion(currentQuestion);

next__button.addEventListener('click', () => {
    currentQuestion = nextQuestion(currentQuestion);
})

answers__list.addEventListener('click', event => {
    const target = event.target.closest('li');

    if (!target) { return; }

    if (isRight(target)) {
        answers__items[target.dataset.itemId - 1].classList.add('win');
        question__img.src = shuffledArray[targetId - 1].image;
        question__about_name.textContent = shuffledArray[targetId - 1].name;
    }
    else {
        answers__items[target.dataset.itemId - 1].classList.add('error');
    } 
})


function nextQuestion(currentIndex) {
    if (currentIndex == 6)
        alert('You played');

    shuffledArray = shuffle(birdsData[currentIndex]);
    targetId = getRandomNumber(1, 6);
    console.log(targetId);
    

    answers__items.forEach((item, index) => {
        item.textContent = shuffledArray[index].name;
    })

    return ++currentIndex;
}

function isRight(target) {
    if (target.dataset.itemId == targetId)
        return true;
    else
        return false;
}
