const readline = require("readline-sync");
const {endGameLose,endGameWin,randomNum,checkInventory,run,inventory,fightDragon1,fightDragon2,fightDragon3,encounter,dragons} = require('./dungeonFunctionsAPI');
const name = readline.question("Hello weary traveler and welcome to the DUNGEON! This game will test your will to survive and ultimately determine your fate.. First of all, what is your name? ");

let playerAlive = true;
let playerHealth = 300;
let encounters = 0;

console.log("Alright " + name + " Let us begin.")

const userWalk = readline.keyInPause("You will travel through this dungeon and as you do you will encounter dragons or other obstacles if you wish to proceed. ")

console.log("You walk forward carefully as not to disturb any creatures neary... ")

// const userAttackOrRunInput = ["Give up","Choose to attack","Choose to run"]


function walk (){
    random = Math.random()
    if (random >= .5){
        console.log("You have made it a little further without any obstacles")
        
    } else if (random < .5){
        console.log("You have encountered a dragon!")
        encounter()
    }
}


do {
    readline.keyInPause("As you walk you check your health level, it is currently at " + playerHealth + "hp")
    console.log("You continue inching forward as your heart races... ")
    walk()
} while (playerHealth > 0)

do {
    console.log("Sadly you have died and must start over, please contact your local computer administrator to start over!")
    endGameLose()
} while (playerHealth <= 0)

// if (encounters < 6){
//     encounters += 1
//     walk()
// } else if ( encounters >= 6){
//     endGame()
// }


// while (playerAlive === true)


// while (playerHealth > 0){
//     if (firstWalk === "w")
//     walk()
// }

// while (playerHealth === 0){
//     console.log("Unfortunately you have died in battle, we will write home to your loved ones but if you wish to play again please contact your computer administrator.")
//     break;
// }
module.exports = {
    playerHealth,

}

console.log(encounters)

