const readline = require("readline-sync");
const name = readline.question("What is your name? ");

// console.log("Hello " + name)
// console.log("The next question will decide your fate.")

let userInput = readline.question("What would you like to do first? ('Put hand in hole', 'Find the key', or 'Open the door') ") 

// console.log(userInput)

// var key = false

// const possibleOutcomes = {
//     openDoorWO: "The door is locked.",
//     openDoorW: "Congrats, you win now.",
//     handInHole: "You die cuz you dumb",
//     findKey: "Yay, you found the key."
// }

// for (var i = 0; i < possibleOutcomes.length; i++){
//     if (userInput === "Open the door"){
//         console.log(possibleOutcomes.openDoorWO)
//     } else if (userInput === "Find the key"){
//         console.log()
//     }
// }


function restart(userInput){
    console.log(userInput)
}


restart(userInput)
