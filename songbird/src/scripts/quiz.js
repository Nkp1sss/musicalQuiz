import createElement from './modules/createElements.js';
import birdsData from './modules/sourceData.js';
import shuffle, { getRandomNumber } from './modules/shuffle.js';
import { playError, playWin } from './modules/playSound.js';
import { loadSong, playSong, pauseSong, updateProgress, setProgress, 
        setVolume, setVolumeByImgClick, endSong } from './modules/audioplayer.js';

import '../styles/quiz.scss';

/** Main audioplayer */
const player = document.querySelector('.player'),
    playBtn = document.querySelector('.play'),
    audio = document.querySelector('.audio'),
    progressContainer = document.querySelector('.progress__container'),
    progress = document.querySelector('.progress'),
    imgSrc = document.querySelector('.img__src'),
    startTime = document.querySelector('.start-time'),
    endTime = document.querySelector('.end-time'),
    volumeContainer = document.querySelector('.volume__container'),
    volumeImg = document.querySelector('.volume__img'),
    volume = document.querySelector('.volume');

let next__button = document.querySelector('.next-button');
let answers__list = document.querySelector('.answers-list');
let answers__items = document.querySelectorAll('.answers-list__item');
let question__img = document.querySelector('.question__image');
let question__about_name = document.querySelector('.question__about-name');
let about__score = document.querySelector('.about__score');
let list__items = document.querySelectorAll('.list__item');
console.log(list__items);


let currentQuestion = 0;
let currentQuestionScore = 5;
let totalScore = 0;

let targetId; // randomly generated target id 
let shuffledArray = [];
let isWin = false;

currentQuestion = nextQuestion(currentQuestion);

next__button.addEventListener('click', () => {
    currentQuestion = nextQuestion(currentQuestion);
})

function nextQuestion(currentIndex) {
    resetAll();
    endSong(player, imgSrc);

    shuffledArray = shuffle(birdsData[currentIndex]);
    targetId = getRandomNumber(1, 6);

    answers__items.forEach((item, index) => {
        item.textContent = shuffledArray[index].name;
    })

    loadSong(shuffledArray, targetId, audio);
    highlightCurQuestion(currentQuestion);

    return ++currentIndex;
}

answers__list.addEventListener('click', event => {
    const target = event.target.closest('li');

    if (!target) { return; }

    if (isRight(target)) {
        if (!answers__items[target.dataset.itemId - 1].classList.contains('win')) {
            isWin = true;
            pauseSong(player, audio, imgSrc);
            playWin();
            answers__items[target.dataset.itemId - 1].classList.add('win');

            question__img.src = shuffledArray[targetId - 1].image;
            question__about_name.textContent = shuffledArray[targetId - 1].name;

            next__button.disabled = false;

            totalScore += currentQuestionScore;
            about__score.textContent = `score: ${totalScore}`;
        }
    }
    else {
        if (!answers__items[target.dataset.itemId - 1].classList.contains('error')
            && !isWin) {
            playError();
            answers__items[target.dataset.itemId - 1].classList.add('error');
            currentQuestionScore -= 1;
        }
    } 
})

/** Сhecks if answer choice is correct */
function isRight(target) {
    if (target.dataset.itemId == targetId)
        return true;
    else
        return false;
}

/** When clicking on the next question, 
 * removes all classes and sets default values */
function resetAll() {
    answers__items.forEach(item => {
        if (item.classList.contains('error'))
            item.classList.remove('error');  
    })
    answers__items.forEach(item => {
        if (item.classList.contains('win'))
            item.classList.remove('win');
    })

    progress.style.width = 0;
    endTime.textContent = '0:00';
    question__img.src = 'assets/images/question.jpg';
    question__about_name.textContent = '*****';
    next__button.disabled = true;
    currentQuestionScore = 5;
    isWin = false;
}

function highlightCurQuestion(currentQuestion) {
    list__items.forEach(item => item.classList.remove('highlight'));
    list__items[currentQuestion].classList.add('highlight');
}


/** 
 * Audioplayer
 */
playBtn.addEventListener('click', () => {
    if (player.classList.contains('play'))
        pauseSong(player, audio, imgSrc);
    else
        playSong(player, audio, imgSrc);
});

audio.addEventListener('timeupdate', event => {
    updateProgress(event, progress, startTime, endTime);
});

progressContainer.addEventListener('click', event => {
    setProgress(event, audio, progressContainer);
});

audio.addEventListener('ended', () => {
    endSong(player, imgSrc);
});

volume.addEventListener('input', () => {
    setVolume(audio, volume, volumeImg);
})

let saveVolume = 0.5;
volumeImg.addEventListener('click', () => {
    saveVolume = setVolumeByImgClick(saveVolume, volume, volumeImg, audio);
})
