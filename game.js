          /*this are the vairables that hold the scores of both humans and computer*/
        let humanScore=0
        let computerScore=0
  /*the function that plays the game for 5 rounds*/
function playGame() {
    for (let index = 1; index < 6; index++) {
        /*this is the function that generates random numbers*/
        function randomValue() {
            let value=Math.floor(Math.random()*10)
            return value
        }

        /*this the function that uses random numbers to generate random choice for the pc*/
        function choiceLogic(choice) {
            if (choice<=3) {
                return 'rock'
            }else if (choice>3&&choice<=6) {
                return 'paper'
            }else if (choice>6&&choice<=9) {
                return 'scissors'
            }
        }
        /*this is the function that makes a choice for the pc*/
        function getComputerChoice() {
           return choiceLogic(randomValue())
        }
        /*this the function that is used to get the values from humans*/
        function getHumanChoice() {
            let choice=prompt('play the game')
            return choice
        }

        /*this is the function that displays the results*/
        function results(result) {
            console.log(result)
            if (result[4]=='w') {
                humanScore+=1
            } else if(result[4]=='l') {
                computerScore+=1
            }
            console.log(`you:${humanScore}  computer:${computerScore}`)
        }
        /*this the function that plays the game each round*/
        function playRound(HC, CC) {
            const humanChoice = HC.toLowerCase()
            const computerChoice = CC.toLowerCase()
            let announcement=''
            if (humanChoice==computerChoice) {
                announcement='that was a draw'
            } else if (humanChoice=='rock'&&computerChoice=='paper'){
                announcement=`you loose ${computerChoice} beats ${humanChoice}`
            }else if(humanChoice=='paper'&&computerChoice=='scissors'){
                announcement=`you loose ${computerChoice} beats ${humanChoice}`
            }else if(humanChoice=='scissors'&&computerChoice=='rock'){
                announcement=`you loose ${computerChoice} beats ${humanChoice}`
            }else{
                announcement=`you win ${humanChoice} beats ${computerChoice}`
            }
            results(announcement)
        }
        playRound(getHumanChoice(), getComputerChoice())
    }
}

playGame()