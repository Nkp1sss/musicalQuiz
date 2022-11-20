import '../styles/main.scss';
import { translations } from './modules/language';

/**
 * Change Language
 */
let play = document.querySelector('.start-link');
let gallery = document.querySelector('.gallery-link');

let language = 'ru';

let langBtn = document.querySelector('.language');

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
    play.textContent = translations[language].play;
    gallery.textContent = translations[language].gallery;
}