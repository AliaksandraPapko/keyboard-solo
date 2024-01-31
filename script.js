const containerWord = document.querySelector(`#word`);
const span = containerWord.querySelector('span');
const correctCount = document.querySelector(`.correct-count`);
const wrongCount = document.querySelector(`.wrong-count`);
const wordMistakes = document.querySelector(`.word-mistakes`);

let i = 0;

function randomWord() {
    const words = [
        'language',
        'dog',
        'cat',
        'pizza',
        'magic'
    ]
    const i = Math.floor(Math.random() * words.length);

    return words[i];
}

let currentSymbol = randomWord();
spanWord(currentSymbol);

function spanWord(word) {
    containerWord.innerHTML = word
        .split('').map(item => `<span>${item}</span>`).join('');
}


document.addEventListener('keydown', (event) => {
    if (event.key === currentSymbol[i]) {
        containerWord.childNodes[i].className = 'c';
        i++;
    } else if (event.key != currentSymbol[i]) {
        containerWord.childNodes[i].className = 'w';
        wrongCount.textContent = ++wrongCount.textContent;
        wordMistakes.textContent = ++wordMistakes.textContent;
    }

    if (i === currentSymbol.length) {
        correctCount.textContent = ++correctCount.textContent;
        currentSymbol = randomWord();
        spanWord(currentSymbol);
        i = 0;
        wordMistakes.textContent = 0;
    }
})