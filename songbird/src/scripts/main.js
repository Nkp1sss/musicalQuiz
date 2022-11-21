import '../styles/main.scss';

import { translations } from './modules/language';

/**
 * Change Language
 */
const play = document.querySelector('.start-link');
const gallery = document.querySelector('.gallery-link');
const langBtn = document.querySelector('.language');

let language = 'ru';

window.addEventListener('load', () => {
    if (localStorage.getItem('language')) {
        language = localStorage.getItem('language');
    }
    changeText(language);
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
}

function changeText(language) {
    langBtn.textContent = translations[language].langBtn;
    play.textContent = translations[language].play;
    gallery.textContent = translations[language].gallery;
}
