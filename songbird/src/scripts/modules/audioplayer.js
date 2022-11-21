// Init
export function loadSong(array, targetId, audio) {
    audio.src = array[targetId - 1].audio;
}

// Play
export function playSong(wrapper, audio, imgSrc) {
    wrapper.classList.add('play');
    audio.play();
    imgSrc.src = './assets/icons/pause-button.png';
}
// Pause
export function pauseSong(wrapper, audio, imgSrc) {
    wrapper.classList.remove('play');
    audio.pause();
    imgSrc.src = './assets/icons/play-button.png';
}

// End song
export function endSong(wrapper, imgSrc) {
    wrapper.classList.remove('play');
    imgSrc.src = './assets/icons/play-button.png';
}

// Progress bar
export function updateProgress(event, progress, startTime, endTime) {
    const { duration, currentTime } = event.srcElement;
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
    if (audio.volume === 0) {
        volumeImg.src = './assets/icons/mute.png';
    } else {
        volumeImg.src = './assets/icons/voice.png';
    }
}

// Set volume by image click
export function setVolumeByImgClick(saveVolume, volume, volumeImg, audio) {
    if (volume.value === 0) {
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
