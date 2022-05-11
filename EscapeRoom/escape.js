const readline = require("readline-sync");
const name = readline.question("What is your name? ");
console.log("Hello " + name)
console.log("The next question will decide your fate.")
const userInput = readline.question("What would you like to do? ('Put hand in hole', 'Find the key', or 'Open the door') ") 

let key = false

function begin (){
    console.log(name);
    
    // console.log("The next question will decide your fate.");
    // console.log(userInput)
}
 function next(){
     console.log("Hello " + name);
 }

function restart(){
    console.log(userInput)
}

function openWO(){
    { 
        console.log("The door is locked, you must first obtain the key to leave this horrid dungeon...")
        console.log("You have chosen poorly, what would you like to do now?")
    } 
}

function openWith (){
    console.log("You have done it, you have escaped the dungeon! Congratulations! Please never return.")
}

function handHole (){
    {
    console.log("Since you have chosen to put your hand in this dirty hole you will suffer. Only those who find the key and avoid this wretched hole will prevail.")
}
}




begin()
next()
restart()


if (userInput === "Open the door" && key === false){
    openWO()
} else if (userInput === "Open the door" && key === true){
    openWith()
}

if (userInput === "Put hand in hole"){
    handHole()
} 


// let secondUserInput = readline.question("The door is locked, go figure. Big guy over here thought he would just be able to walk out, what would you like to do now smart ass? ('Put hand in hole', 'Find the key', or 'Open the door') ")

// if (secondUserInput === "Open the door"){

// }

// if (userInput === "Put hand in hole"){
//     console.log("Since you have chosen to put your hand in this dirty hole you will suffer. Only those who find the key and avoid this wretched hole will prevail.")
//     }


// if (userInput === "open the door"){
//     while (key === true){
//     }
// }
// if (userInput === "Find the key"){
//     console.log("You have obtained the key!!!") 
//     var key = true
//     {

// }
// if (userInput === "Put hand in hole"){
//     console.log("Since you have chosen to put your hand in this dirty hole you will suffer. Only those who find the key and avoid this wretched hole will prevail.")
//     // restart()
// }
// }




// if (userInput === "Open the door"){
//     if (key === false){
//         console.log("The door is locked, you must first obtain the key to leave this horrid dungeon...")
//     } 
// } 
// //   let secondUserInput = readline.question("The door is locked, go figure. Big guy over here thought he would just be able to walk out, what would you like to do now smart ass? ('Put hand in hole', 'Find the key', or 'Open the door') ")

// if (secondUserInput === "Open the door")
// if (key === false){
//     console.log("The door is locked, you must first obtain the key to leave this horrid dungeon...")
// } 
//     let fourthUserInput = readline.question("The door is locked, go figure. Big guy over here thought he would just be able to walk out, what would you like to do now smart ass? ('Put hand in hole', 'Find the key', or 'Open the door') ")

// if (secondUserInput === "Find the Key"){
//    console.log("You have obtained the key!!!") 
//    var key = true 
// } 
    
//     let thirdUserInput = readline.question("You have found the key, what would you like to do now!? ('Put hand in hole' or 'Open the door') ")

//     if (thirdUserInput === "Put hand in hole"){
//         console.log("Since you have chosen to put your hand in this dirty hole you will suffer. Only those who find the key and avoid this wretched hole will prevail.")
//     } else if (userInput === "Open the door"){
//     if (key === true){console.log("You have done it, you have escaped the dungeon! Congratulations! Please never return.")
    
// } let finalInput = readline.question("Goodbye")
//     }

//     else if (thirdUserInput === "Open the door") {
//         while (key === true)
//         console.log("You have done it, you have escaped the dungeon! Congratulations! Please never return.")
//     } let finalInput = readline.question("Goodbye")

// // small hole where if you just type open the door three times in a row you win, needs fix


// if(userInput === "Find the key"){
//     console.log("You have obtained the key!!!") 
//     var key = true
// } else if (userInput === "Put hand in hole"){
//     console.log("Since you have chosen to put your hand in this dirty hole you will suffer. Only those who find the key and avoid this wretched hole will prevail.")
//     }

// //console.log(secondUserInput)

// //while (userHasKey === False)
