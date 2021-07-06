const cardContainer = document.querySelector('.card-container')
const sum = document.querySelector('.sum')
const message = document.querySelector('.message')
const startBtn = document.querySelector('.start-btn')
const newBtn = document.querySelector('.new-btn')

let hasBlackjack = false
let isAlive = false
let totalSum = 0

function renderGame() {
    if (totalSum < 21) {
        message.textContent = "Do you want to draw a new card? 🙂"
    } else if (totalSum === 21) {
        message.textContent = "Wohoo! You've got Blackjack! 🥳"
        hasBlackjack = true
        newBtn.style.display = 'none'
        startBtn.textContent = 'new game'
    } else {
        message.textContent = 'oh! you just lost the game 😭'
        isAlive = false
        newBtn.style.display = 'none'
        startBtn.textContent = 'new game'
    }
}

function randomNum() {
    return (Math.floor((Math.random() * 11) + 1))
}

function newCard() {
    if (isAlive === true && hasBlackjack === false) {
        let z = randomNum()
        totalSum += z
        renderGame()
        sum.textContent = totalSum
        cardContainer.innerHTML += `<div class="card">
                                   <h1>${z}</h1>
                               </div>`
    }
}

function resetGame() {
    cardContainer.innerHTML = ''
    totalSum = 0
    sum.textContent = totalSum
    newBtn.style.display = 'block'
    isAlive = true
    hasBlackjack = false
}

function startGame() {
    if (hasBlackjack === true || isAlive === false) {
        resetGame()
        newCard()
        newCard()
        renderGame()
    }
}