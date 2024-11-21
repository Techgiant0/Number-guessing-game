// document.querySelector(".message").style.backgroundColor = "#ff5733"

let hiddenNumber =Math.trunc(Math.random()  * 20) + 1
let score = 20;

console.log(hiddenNumber )
let highscore =0;

const displayMessage =(message) => {
    document.querySelector(".message").textContent = message
}

// document.querySelector(".number").textContent = hiddenNumber

document.querySelector(".check").addEventListener("click", () => {
    const guess = Number(document.querySelector(".guess").value)
    
    if(!guess) {
        displayMessage("Enter a valid Number")
    } else if (guess === hiddenNumber) {
        
        displayMessage("Woah!, you guessed the right number!!!!!!")
        document.querySelector(".number").textContent = hiddenNumber
        document.querySelector("body").style.backgroundColor= "#ff5733"
    } else if (guess !== hiddenNumber ) {
        if (score > 1 ) {
            displayMessage(guess > hiddenNumber ? "Your guess is too high" : "Your guess is too low")
            score-2
            document.querySelector(".score").textContent = score

        } else {
            displayMessage("Sorry, you lost the game and game over😔😔")
            document.querySelector(".score").textContent = 0
        }
    }

})