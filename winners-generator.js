import {participantsList} from './participants-list.js'

const box = document.getElementById('box');
const winnerBlock = document.getElementById('winner')
const winnersList = document.getElementById('winners-list')
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
    box.classList.add('animation');
    box.classList.add('disabled');
    let currentPlayer = winners.shift();
    winnerBlock.innerHTML = currentPlayer.name
    winnersResult.push(currentPlayer)
    const someWinner = document.createElement('li')
    someWinner.innerHTML = `${currentPlayer.id} <b>${currentPlayer.name}</b>, ${currentPlayer.experience}, ${currentPlayer.department}`
    winnersList.prepend(someWinner)
    setTimeout(() => {
        box.classList.remove('animation')
    }, 3000)
}

const startRandomizer = (func, num) => {
    if (!num) {
        return
    }
    func()
    setTimeout(() => startRandomizer(func, num - 1), 4000)
}

box.addEventListener('click', () => {
    shuffle(participantsList)
    console.log(winners)
    startRandomizer(fillWinnersList, 14)
})