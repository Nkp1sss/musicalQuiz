import '../styles/result.scss';

import { translations } from './modules/language';

let congratulationText = document.querySelector('.congratulation-text');

congratulationText.textContent = `Вы прошли викторину и набрали ${getScore()} баллов из 30!`;

function getScore() {
    return localStorage.getItem('score') ? localStorage.getItem('score') : 0; 
}


/**
 * Change Language
 */
let congratulationTitle = document.querySelector('.congratulation-title');
let againLink = document.querySelector('.again-link');

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
    congratulationTitle.textContent = translations[language].congratulationTitle;
    congratulationText.textContent = `${translations[language].congratulationTextLeft}${getScore()}${translations[language].congratulationTextRight}`;
    againLink.textContent = translations[language].again;
}