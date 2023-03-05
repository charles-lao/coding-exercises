//example one
const playerOneName = "tim"
const playerTwoName = "jenn"
const playerOneMarker = "X"
const playerTwoMarker = "O"

//example two
const playerOne = {
    name: "tim",
    marker: "X"
}

const playerTwo = {
    name: "Jenn",
    marker: "O"
}

function printName(player) {
    console.log(player.name)
}

console.log(playerOneName)
console.log(playerTwoName)

function gameOver(winningPlayer) {
    console.log("Congratulations!")
    console.log(winningPlayer.name + " is the winner!")
}

function Player(name, marker) {
    this.name = name
    this.marker = marker
    this.sayName = function() {
        console.log(name)
    }
}

const player = new Player('steve', 'X')
console.log(player.name)
player1.sayName()
player2.sayName()
