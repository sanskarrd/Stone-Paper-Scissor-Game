const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')

let userChoice
let computerChoice
const possibleChoices = document.querySelectorAll('button')
possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click',(e) => {userChoice= e.target.id
userChoice = e.target.id
userChoiceDisplay.innerHTML = userChoice
generateComputerChoice()
getresult()
}))

function generateComputerChoice() {
    const random = Math.floor(Math.random() * 3) +1
    console.log(random)

    if(random === 1){
        computerChoice ='Rock'
    }
    if(random === 2){
        computerChoice ='Paper'
    }
    if(random === 3){
        computerChoice ='Scissor'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getresult(){
    if(computerChoice === userChoice){
        result = 'Its a Draw'
    }
    if(computerChoice === 'Rock' && userChoice === 'Paper'){
        result = 'You win'
    }
    if(computerChoice === 'Rock' && userChoice === 'Scissor'){
        result = 'You Lose !'
    }
    if(computerChoice === 'Paper' && userChoice === 'Scissor'){
        result = 'You win'
    }
    if(computerChoice === 'Paper' && userChoice === 'Rock'){
        result = 'You Lose !'
    }
    if(computerChoice === 'Scissor' && userChoice === 'Rock'){
        result = 'You win'
    }
    if(computerChoice === 'Scissor' && userChoice === 'Paper'){
        result = 'You Lose !'
    }
    resultDisplay.innerHTML = result
}