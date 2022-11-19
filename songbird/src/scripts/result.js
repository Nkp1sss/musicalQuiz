import '../styles/result.scss';

let congratulationText = document.querySelector('.congratulation-text');

congratulationText.textContent = `Вы прошли викторину и набрали ${getScore()} баллов из 30!`;

function getScore() {
    return localStorage.getItem('score') ? localStorage.getItem('score') : 0; 
}