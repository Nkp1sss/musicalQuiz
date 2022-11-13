import createElement from './modules/createElements.js';
import birdsData from './modules/sourceData.js';
import shuffle, { getRandomNumber } from './modules/shuffle.js';

import '../styles/quiz.scss';

let body = document.body;
let main = createElement('main', 'main');
let container = createElement('div', 'container');

let about = createElement('div', 'about');
let about__logo = createElement('div', 'about__logo');
let about__score = createElement('div', 'about__score');

let pagination = createElement('div', 'pagination list');
let pagination__items = [ createElement('div', 'list__item'),
                          createElement('div', 'list__item'),
                          createElement('div', 'list__item'),
                          createElement('div', 'list__item'),
                          createElement('div', 'list__item'),
                          createElement('div', 'list__item') ];

let question = createElement('div', 'question');
let question__image = createElement('img', 'question__image');
let question__song = createElement('audio', 'question__song');
let song__source = createElement('source');

let game = createElement('div', 'game');
let answers = createElement('div', 'game__answers');
let description = createElement('div', 'game__description');
let answers__list = createElement('ul', 'answers-list');
let answers__items = [ createElement('li', 'answers-list__item'),
                       createElement('li', 'answers-list__item'),
                       createElement('li', 'answers-list__item'),
                       createElement('li', 'answers-list__item'),
                       createElement('li', 'answers-list__item'),
                       createElement('li', 'answers-list__item') ];
answers__items.forEach((item, index) => item.setAttribute('data-item-id', index + 1));

let button = createElement('button', 'button next-button');

/** ТЕКСТ БЛОКОВ ЗДЕСЬ  */
/**
 * TODO: ПОМЕНЯТЬ ТЕКСТ ПОСЛЕ ЗАВЕРШЕНИЯ ЛОГИКИ 
 */
about__logo.textContent = 'about__logo';
about__score.textContent = 'score: 0';
pagination__items.forEach((item, index) => {
    item.textContent = index + 1;
})
answers.textContent = 'answers';
description.textContent = 'Послушайте плеер\nВыберите аааааааааааааааааа';
button.textContent = 'next level';


// question__song.setAttribute('controls', '');
question__song.controls = '1';

song__source.type = 'audio/mp3';
// question__song.setAttribute('type', 'audio/mp3');



body.prepend(main);
    main.append(container);
        container.append(about);
            about.append(about__logo);
            about.append(about__score);
        container.append(pagination);
            pagination__items.forEach(item => pagination.append(item));
        container.append(question);
            question.append(question__image);
            question.append(question__song);
                question__song.append(song__source);
        container.append(game);
            game.append(answers);
                answers.append(answers__list);
                    answers__items.forEach(answer => answers__list.append(answer));
            game.append(description);
        container.append(button);





/** TESTING ... */
let currentIndex = 0;
let targetId;

button.addEventListener('click', () => {
    if (currentIndex == 6)
        alert('You played');

    let shuffledArray = shuffle(birdsData[currentIndex]);
    targetId = getRandomNumber(1, 6);

    answers__items.forEach((item, index) => {
        item.textContent = shuffledArray[index].name;
    })

    let test = document.getElementById('test');
    test.src = shuffledArray[targetId - 1].audio;

    song__source.src = shuffledArray[targetId - 1].audio;

    // question.textContent = shuffledArray[targetId - 1].name;

    currentIndex++;
})

answers__list.addEventListener('click', event => {
    const target = event.target.closest('li');

    if (!target) { return; }

    console.log(target.dataset.itemId);
    if (target.dataset.itemId == targetId)
        console.log(true);
    else
        console.log(false);
})


