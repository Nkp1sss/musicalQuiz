import '../styles/gallery.scss';

import createElement from './modules/createElements';
import musicData from './modules/sourceData';
import {
    playSong, pauseSong, updateProgress, setProgress,
    setVolume, setVolumeByImgClick, endSong
} from './modules/audioplayer';
import { translations } from './modules/language';

/** Miniplayer */
const descriptionSong = createElement('div', 'description-song');
const descriptionText = createElement('div', 'description-text');
const songImg = createElement('img', 'song__image');
const songName = createElement('div', 'song__name');
const performerName = createElement('div', 'performer-name');
const miniPlayer = createElement('div', 'mini-player');
const addWrapper = createElement('div', 'add-wrapper');
const miniPlayBtn = createElement('div', 'button mini-play');
const miniImgSrc = createElement('img', 'mini-img__src');
const miniAudio = createElement('audio', 'mini-audio');
const miniProgressContainer = createElement('div', 'mini-progress__container');
const miniProgress = createElement('div', 'mini-progress');
const miniStartTime = createElement('div', 'mini-start-time');
const miniEndTime = createElement('div', 'mini-end-time');
const miniVolumeContainer = createElement('div', 'mini-volume__container');
const miniVolumeImg = createElement('img', 'mini-volume__img');
const miniVolume = createElement('input', 'mini-volume');

let currentItemId = 0;

/**
 * Change Language
 */
let language = 'ru';

const langBtn = document.querySelector('.language');
const galleryTitle = document.querySelector('.gallery-title');
const list = document.querySelector('.list');
const gameDescription = document.querySelector('.game__description');

window.addEventListener('load', () => {
    if (localStorage.getItem('language')) {
        language = localStorage.getItem('language');
    }
    changeText(language);
    createMiniPlayer(gameDescription, 0);
});
langBtn.addEventListener('click', changeLanguage);

function changeLanguage() {
    if (language === 'ru') {
        language = 'en';
    } else {
        language = 'ru';
    }

    localStorage.setItem('language', language);
    changeText(language);
    createMiniPlayer(gameDescription, currentItemId);
}

function changeText(language) {
    langBtn.textContent = translations[language].langBtn;
    galleryTitle.textContent = translations[language].gallery;
}

miniPlayBtn.addEventListener('click', () => {
    if (miniPlayer.classList.contains('play')) {
        pauseSong(miniPlayer, miniAudio, miniImgSrc);
    } else {
        playSong(miniPlayer, miniAudio, miniImgSrc);
    }
});

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
});

let miniSaveVolume = 0.5;
miniVolumeImg.addEventListener('click', () => {
    miniSaveVolume = setVolumeByImgClick(miniSaveVolume, miniVolume, miniVolumeImg, miniAudio);
});

function createMiniPlayer(root, targetId) {
    root.textContent = '';

    descriptionText.textContent = musicData[Math.floor(targetId / 6)][targetId % 6]
    .description[language];
    songImg.src = musicData[Math.floor(targetId / 6)][targetId % 6].image;
    songName.textContent = musicData[Math.floor(targetId / 6)][targetId % 6].name;
    performerName.textContent = musicData[Math.floor(targetId / 6)][targetId % 6].performer;
    miniImgSrc.src = './assets/icons/play-button.png';
    miniAudio.src = musicData[Math.floor(targetId / 6)][targetId % 6].audio;
    miniStartTime.textContent = '00:00';
    miniEndTime.textContent = '00:00';
    miniProgress.style.width = 0;
    endSong(miniPlayer, miniImgSrc);
    miniVolumeImg.src = './assets/icons/voice.png';
    miniVolume.type = 'range';
    miniVolume.min = 0;
    miniVolume.max = 100;
    miniVolume.value = 99;

    root.prepend(descriptionSong);
        descriptionSong.append(songImg);
        descriptionSong.append(miniPlayer);
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

    root.append(descriptionText);
}

let currentId = 0;
musicData.forEach(genre => {
    genre.forEach(music => {
        createListItem(list, music, currentId);
        currentId++;
    });
});

function createListItem(root, music, id) {
    const item = createElement('li', 'list__item');

    item.textContent = `${id + 1}. ${music.name}`;
    item.setAttribute('data-item-id', id);
    root.append(item);
}

list.addEventListener('click', event => {
    const target = event.target.closest('li');

    if (!target) { return; }

    currentItemId = target.dataset.itemId;

    createMiniPlayer(gameDescription, target.dataset.itemId);
});

console.log('Самооценка: 270 баллов. Выполнены все требования.');
