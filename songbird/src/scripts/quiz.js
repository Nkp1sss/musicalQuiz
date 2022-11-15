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
let gameDescription = document.querySelector('.game__description');

let currentQuestion = 0;
let currentQuestionScore = 5;
let totalScore = 0;

let targetId = 0; // randomly generated target id 
let shuffledArray = [];
let isWin = false;

currentQuestion = nextQuestion(currentQuestion);

next__button.addEventListener('click', () => {
    currentQuestion = nextQuestion(currentQuestion);
})

function nextQuestion(currentIndex) {
    resetAll();
    endSong(player, imgSrc);
    gameDescription.textContent = 'Послушайте плеер и выберите песню.';

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
    endTime.textContent = '00:00';
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


/** Miniplayer */
let descriptionSong = createElement('div', 'description-song');
let descriptionText = createElement('div', 'description-text');
let songImg = createElement('img', 'song__image');
let songName = createElement('div', 'song__name');
let miniPlayer = createElement('div', 'mini-player');
let addWrapper = createElement('div', 'add-wrapper');
let miniPlayBtn = createElement('div', 'button mini-play');
let miniImgSrc = createElement('img', 'mini-img__src');
let miniAudio = createElement('audio', 'mini-audio');
let miniProgressContainer = createElement('div', 'mini-progress__container');
let miniProgress = createElement('div', 'mini-progress');
let miniStartTime = createElement('div', 'mini-start-time');
let miniEndTime = createElement('div', 'mini-end-time');
let miniVolumeContainer = createElement('div', 'mini-volume__container');
let miniVolumeImg = createElement('img', 'mini-volume__img');
let miniVolume = createElement('input', 'mini-volume');

answers__list.addEventListener('click', event => {
    const target = event.target.closest('li');

    if (!target) { return; }

    createMiniPlayer(gameDescription, target.dataset.itemId);
})

miniPlayBtn.addEventListener('click', () => {
    console.log('test');
    if (miniPlayer.classList.contains('play'))
        pauseSong(miniPlayer, miniAudio, miniImgSrc);
    else
        playSong(miniPlayer, miniAudio, miniImgSrc);
})

miniAudio.addEventListener('timeupdate', event => {
    updateProgress(event, miniProgress, miniStartTime, miniEndTime);
});

miniProgressContainer.addEventListener('click', event => {
    setProgress(event, miniAudio, miniProgressContainer);
});

miniAudio.addEventListener('ended', () => {
    endSong(miniPlayer, miniImgSrc);
});

miniVolume.addEventListener('input', () => {
    setVolume(miniAudio, miniVolume, miniVolumeImg);
})

let miniSaveVolume = 0.5;
miniVolumeImg.addEventListener('click', () => {
    miniSaveVolume = setVolumeByImgClick(miniSaveVolume, miniVolume, miniVolumeImg, miniAudio);
})

function createMiniPlayer(root, targetId) {
    root.textContent = '';

    descriptionText.textContent = shuffledArray[targetId - 1].description;
    songImg.src = shuffledArray[targetId - 1].image;
    songName.textContent = shuffledArray[targetId - 1].name;
    miniImgSrc.src = './assets/icons/play-button.png';
    miniAudio.src = shuffledArray[targetId - 1].audio;
    miniStartTime.textContent = '00:00';
    miniEndTime.textContent = '00:00';
    miniProgress.style.width = 0;
    endSong(miniPlayer, miniImgSrc);
    miniVolumeImg.src = './assets/icons/voice.png';
    miniVolume.type = 'range';
    miniVolume.min = 0;
    miniVolume.max = 100;
    miniVolume.value = 99;

    root.append(descriptionSong);
        descriptionSong.append(songImg);
        descriptionSong.append(miniPlayer)
            miniPlayer.append(songName);
            miniPlayer.append(addWrapper);
                addWrapper.append(miniPlayBtn);
                    miniPlayBtn.append(miniImgSrc);
                addWrapper.append(miniAudio);
                addWrapper.append(miniProgressContainer);
                    miniProgressContainer.append(miniProgress);
                    miniProgressContainer.append(miniStartTime);
                    miniProgressContainer.append(miniEndTime);
            miniPlayer.append(miniVolumeContainer);
                miniVolumeContainer.append(miniVolumeImg);
                miniVolumeContainer.append(miniVolume);

    root.append(descriptionText);
}
