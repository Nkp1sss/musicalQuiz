// Init
export function loadSong(array, targetId, audio) {
    audio.src = array[targetId - 1].audio;
}

// Play
export function playSong(wrapper, audio, imgSrc) {
    wrapper.classList.add('play');
    audio.play();
    imgSrc.src = './assets/icons/pause-button.png'
}
// Pause
export function pauseSong(wrapper, audio, imgSrc) {
    wrapper.classList.remove('play');
    audio.pause();
    imgSrc.src = './assets/icons/play-button.png'
}

// End song
export function endSong(wrapper, imgSrc) {
    wrapper.classList.remove('play');
    imgSrc.src = './assets/icons/play-button.png';

}

// Progress bar
export function updateProgress(event, progress, startTime, endTime) {
    const { volume, duration, currentTime } = event.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;

    setTime();

    function setTime() {
        let minutes = Math.floor((currentTime / 60));
        let seconds = Math.floor(currentTime - minutes * 60);
        if (minutes < 10) minutes = `0${minutes}`;
        if (seconds < 10) seconds = `0${seconds}`;
        startTime.textContent = `${minutes}:${seconds}`;

        if (!isNaN(duration)) {
            let minutes = Math.floor((duration / 60));
            let seconds = Math.floor(duration - minutes * 60);
            if (minutes < 10) minutes = `0${minutes}`;
            if (seconds < 10) seconds = `0${seconds}`;
            endTime.textContent = `${minutes}:${seconds}`;
        }
    }
}

// Set progress
export function setProgress(event, audio, progressContainer) {
    const width = progressContainer.clientWidth;
    const clickX = event.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
}

// Set volume
export function setVolume(audio, volume, volumeImg) {
    audio.volume = volume.value / 100;
    if (audio.volume === 0)
        volumeImg.src = './assets/icons/mute.png';
    else
        volumeImg.src = './assets/icons/voice.png';
}

export function setVolumeProgress(volume) {
    var value = (volume.value - volume.min) / (volume.max - volume.min) * 100
    volume.style.background = 'linear-gradient(to right, #2B3C5B 0%, #2B3C5B ' + value + '%, #E4E9ED ' + value + '%, #E4E9ED 100%)'
}

// Set volume by image click
export function setVolumeByImgClick(saveVolume, volume, volumeImg, audio) {
    if (volume.value == 0) {
        volume.value = saveVolume * 100;
        audio.volume = saveVolume;
        volumeImg.src = './assets/icons/voice.png';
    } else {
        volume.value = 0;
        saveVolume = audio.volume;
        audio.volume = 0;
        volumeImg.src = './assets/icons/mute.png';
    }

    return saveVolume;
}




/*
// const player = document.querySelector('.player'),
//       playBtn = document.querySelector('.play'),
//       audio = document.querySelector('.audio'), 
//       progressContainer = document.querySelector('.progress__container'), 
//       progress = document.querySelector('.progress'),
//       imgSrc = document.querySelector('.img__src'),
//       startTime = document.querySelector('.start-time'),
//       endTime = document.querySelector('.end-time'),
//       volumeContainer = document.querySelector('.volume__container'),
//       volumeImg = document.querySelector('.volume__img'),
//       volume = document.querySelector('.volume');

// Init
// function loadSong(targetId) {
//     audio.src = shuffledArray[targetId - 1].audio;
// }
// loadSong(shuffledArray, targetId, audio);

// Play
// function playSong() {
//     player.classList.add('play');
//     audio.play();
//     imgSrc.src = './assets/icons/pause-button.png'
// }
// Pause
// function pauseSong() {
//     player.classList.remove('play');
//     audio.pause();
//     imgSrc.src = './assets/icons/play-button.png'
// }

// loadSong(shuffledArray, targetId, audio);
// console.log(shuffledArray, targetId, audio);

playBtn.addEventListener('click', () => {
    if (player.classList.contains('play'))
        pauseSong(player, audio, imgSrc);
    else
        playSong(player, audio, imgSrc);
});

// Progress bar
// function updateProgress(event) {
//     const {volume, duration, currentTime} = event.srcElement;
//     const progressPercent = (currentTime / duration) * 100;
//     progress.style.width = `${progressPercent}%`;

//     setTime();

//     function setTime() {
//         let minutes = Math.floor((currentTime / 60));
//         let seconds = Math.floor(currentTime - minutes * 60);
//         if (minutes < 10) minutes = `0${minutes}`;
//         if (seconds < 10) seconds = `0${seconds}`;
//         startTime.textContent = `${minutes}:${seconds}`;

//         if (!isNaN(duration)) {
//             let minutes = Math.floor((duration / 60));
//             let seconds = Math.floor(duration - minutes * 60);
//             if (minutes < 10) minutes = `0${minutes}`;
//             if (seconds < 10) seconds = `0${seconds}`;
//             endTime.textContent = `${minutes}:${seconds}`;
//         }    
//     }
// }
audio.addEventListener('timeupdate', event => {
    updateProgress(event, progress, startTime, endTime);
});

// Set progress
// function setProgress(event) {
//     const width = this.clientWidth;
//     const clickX = event.offsetX;
//     const duration = audio.duration;

//     audio.currentTime = (clickX / width) * duration;
// }
progressContainer.addEventListener('click', event => {
    setProgress(event, audio, progressContainer);
});

audio.addEventListener('ended', () => {
    imgSrc.src = './assets/icons/play-button.png';
});

volume.addEventListener('input', () => {
    setVolume(audio, volume, volumeImg);
})

// function setVolume(audio, volume, volumeImg) {
//     audio.volume = volume.value / 100;
//     if (audio.volume === 0.01)
//         volumeImg.src = './assets/icons/mute.png';
//     else
//         volumeImg.src = './assets/icons/voice.png';
// }

// let isMute = false;
let saveVolume = 0.5;
volumeImg.addEventListener('click', () => {
    saveVolume = setVolumeByImgClick(saveVolume, volume, volumeImg, audio);
    // if (isMute) {
    //     isMute = false;
    //     volume.value = saveVolume * 100;
    //     audio.volume = saveVolume;
    //     volumeImg.src = './assets/icons/voice.png';
    // } else {
    //     isMute = true;
    //     volume.value = 0;
    //     saveVolume = audio.volume;
    //     audio.volume = 0;
    //     volumeImg.src = './assets/icons/mute.png';
    // }
})
*/