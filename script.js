const containerWord = document.querySelector(`#word`);
const span = containerWord.querySelector('span');

let i = 0;

const words = [
    'language',
    'dog',
    'cat',
    'pizza',
    'magic'
]
const randomWord = words[Math.floor(Math.random() * words.length)];
const elements = randomWord.split('').map(item => `<span>${item}</span>`).join('')
containerWord.innerHTML = elements;

document.addEventListener('keydown', (event) => {
    if (event.key === randomWord[i]) {
        elements[i].className = 'c'
        i++
    } else if (event.key != randomWord[i]) {
        elements[i].className = 'w'

    }
})