import '../styles/gallery.scss';

import createElement from './modules/createElements.js';
import musicData from './modules/sourceData.js';
import {
    loadSong, playSong, pauseSong, updateProgress, setProgress,
    setVolume, setVolumeByImgClick, endSong, setVolumeProgress
} from './modules/audioplayer.js';

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

// answers__list.addEventListener('click', event => {
//     const target = event.target.closest('li');

//     if (!target) { return; }

//     createMiniPlayer(gameDescription, target.dataset.itemId);
// })

miniPlayBtn.addEventListener('click', () => {
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
    console.log('test');

    descriptionText.textContent = musicData[Math.floor(targetId / 6)][targetId % 6].description;
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

let main = document.querySelector('.main');
let gameDescription = document.querySelector('.game__description');

createMiniPlayer(gameDescription, 0);

let list = document.querySelector('.list');

let currentId = 0;
musicData.forEach(genre => {
    genre.forEach(music => {
        createListItem(list, music, currentId);
        currentId++;
    })
})

function createListItem(root, music, id) {
    let item = createElement('li', 'list__item');

    item.textContent = `${id + 1}. ${music.name}`;
    item.setAttribute('data-item-id', id);
    root.append(item);
}

list.addEventListener('click', event => {
    const target = event.target.closest('li');

    if (!target) { return; }

    createMiniPlayer(gameDescription, target.dataset.itemId);
})