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
            choiceLogic(randomValue())
        }
        function getHumanChoice() {
            let choice=prompt('play the game')
            return choice
        }
        console.log(getHumanChoice())
    }
}

playGame()