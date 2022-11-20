import createElement from './modules/createElements.js';
import musicData from './modules/sourceData.js';
import shuffle, { getRandomNumber } from './modules/shuffle.js';
import { playError, playWin } from './modules/playSound.js';
import { 
    loadSong, playSong, pauseSong, updateProgress, setProgress, 
    setVolume, setVolumeByImgClick, endSong, setVolumeProgress 
} from './modules/audioplayer.js';

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


/**
 * Change Language
 */
let language = 'ru';

let langBtn = document.querySelector('.language');

const translations = {
    ['en']: {
        langBtn: 'RU',
        score: 'Score',
        list__items: ['Лирика', 'Релизы 18 ноября', 'Рок', 'Русский рэп', 'Зарубежный рэп', 'Джаз'],
        gameDescription: 'Послушайте плеер и выберите песню.',
        nxtBtn: 'Следующий',

    },
    ['ru']: {
        langBtn: 'EN',
        score: 'Счёт',
        list__items: ['Lyric', 'Releases November 18', 'Rock', 'Russian rap', 'Foreign rap', 'Jazz'],
        gameDescription: 'Listen to the player and choose a song.',
        nxtBtn: 'Next',
    }
} 

window.addEventListener('load', () => {
    if (localStorage.getItem('language')) {
        language = localStorage.getItem('language');
    }
    changeText(language);
})
langBtn.addEventListener('click', changeLanguage);

function changeLanguage() {
    if (language == 'ru') {
        language = 'en';
    } else {
        language = 'ru';
    }

    localStorage.setItem('language', language);
    changeText(language);
}

function changeText(language) {
    langBtn.textContent = translations[language].langBtn;
    about__score.textContent = `${translations[language].score}: ${totalScore}`;
    list__items.forEach((item, index) => {
        item.textContent = translations[language].list__items[index];
    })
    gameDescription.textContent = translations[language].gameDescription;
    next__button.textContent = translations[language].nxtBtn;
}



currentQuestion = nextQuestion(currentQuestion);

next__button.addEventListener('click', () => {
    currentQuestion = nextQuestion(currentQuestion);
})

function nextQuestion(currentIndex) {
    resetAll();
    endSong(player, imgSrc);
    isResult(currentQuestion);

    gameDescription.textContent = translations[language].gameDescription;
    gameDescription.classList.add('empty');

    shuffledArray = shuffle(musicData[currentIndex]);
    targetId = getRandomNumber(1, 6);

    answers__items.forEach((item, index) => {
        item.textContent = shuffledArray[index].name;
    })

    loadSong(shuffledArray, targetId, audio);
    highlightCurQuestion(currentQuestion);

    return ++currentIndex;
}

answers__list.addEventListener('click', event => {
    gameDescription.classList.remove('empty');

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
            next__button.classList.add('right')

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
    return target.dataset.itemId == targetId ? true : false;
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
    question__img.src = 'assets/images/hol.jpg';
    question__about_name.textContent = '*****';
    next__button.disabled = true;
    next__button.classList.remove('right');
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

setVolumeProgress(volume);
volume.addEventListener('input', () => {
    setVolumeProgress(volume);
}) 


/** Miniplayer */
let descriptionSong = createElement('div', 'description-song');
let descriptionText = createElement('div', 'description-text');
let songImg = createElement('img', 'song__image');
let songName = createElement('div', 'song__name');
let performerName = createElement('div', 'performer-name');
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


miniVolume.addEventListener('input', () => {
    setVolumeProgress(miniVolume);
}) 

function createMiniPlayer(root, targetId) {
    root.textContent = '';

    descriptionText.textContent = shuffledArray[targetId - 1].description;
    songImg.src = shuffledArray[targetId - 1].image;
    songName.textContent = shuffledArray[targetId - 1].name;
    performerName.textContent = shuffledArray[targetId - 1].performer;
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
            miniPlayer.append(performerName);
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

    setVolumeProgress(miniVolume);
    root.append(descriptionText);
}

function isResult(currentQuestion) {
    if (currentQuestion == 5) {
        next__button.textContent = 'Результаты';
    }
    if (currentQuestion == 6) {
        saveScore(totalScore);
        goToResultPage();
    }
}

function saveScore(score) {
    localStorage.setItem('score', score);
}

function goToResultPage() {
    window.location.href = 'result.html';
}
