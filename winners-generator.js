import {participantsList} from './participants-list.js'

const box = document.getElementById('box');
const winnerBlock = document.getElementById('winner')
const winnersList = document.getElementById('winners-list')
const paper = document.getElementById('paper')
let winners = []
const winnersResult = []

const shuffle = (arr) => {
    let currentIndex = arr.length;
    let randomIndex = 0;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [arr[currentIndex], arr[randomIndex]] = [
            arr[randomIndex], arr[currentIndex]];
    }

    winners = arr.slice(0, 14);
}

const fillWinnersList = () => {
    box.classList.add('animation', 'disabled');
    let currentPlayer = winners.shift();
    winnerBlock.innerHTML = currentPlayer.name
    winnersResult.push(currentPlayer)
    const someWinner = document.createElement('li')
    someWinner.innerHTML = `<b>${currentPlayer.name}</b><br> <span style="font-size: 11px">${currentPlayer.experience}, ${currentPlayer.department}</span>`
    winnersList.prepend(someWinner)
    setTimeout(() => {
        box.classList.remove('animation')
    }, 2600)
}

const startRandomizer = (func, num) => {
    if (!num) {
        box.classList.add('animation', 'dog-animation')
        paper.style.display = 'none'
        return
    }
    func()
    setTimeout(() => startRandomizer(func, num - 1), 3500)
}

box.addEventListener('click', () => {
    shuffle(participantsList)
    startRandomizer(fillWinnersList, 14)
})