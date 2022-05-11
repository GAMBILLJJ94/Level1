
// while (playerHealth === 200){
//     if  (playerHealth = 200){
//     (console.log("health at 200"))
//     break;
// } else if (playerHealth === 100){
//     console.log("health at 100")
//     break;
// } else if (playerHealth === 50){
//     console.log("health at 50")
//     break;
// }
// }

// console.log (randomNum())

// first walking scenario after beginning

// while (firstWalk === "w"){
//     if (randomNum() < .1){
//         console.log("You have tested fate and encountered a large dragon that deals 300 damage, this killing you instantly..")
//         playerHealth -= 300
//         break;
//     } else if ((randomNum()>=.11) && (randomNum < .13)){
//         console.log("You have avaded danger for now")
//         const checkOrWalk = readline.question("(w) to keep walking")

//         break;
//     } else if (randomNum() >= .13){
//         console.log("You have encountered a dragon")
//         console.log("You have encountered GORGON THE GREAT, a creature from the multi-verse that has no mercy for the weak, what would you like to do? Run or Attack? ")
//         userFightSelect = readline.keyInSelect(userAttackOrRunInput,"Decide your fate ")
//         break;
//     } 
// }



if (userFightSelect === 1){
    console.log(name + " you chose to fight")
    console.log("and delt 100 damage, dealing a fatal blow. For this you have been rewarded with a relic, the ever sought after 'Invisibility cloak of Sharway'")
    inventory.push("Invisibility cloak")
} else if (userFightSelect === 2){
    console.log(name + " it looks like you you chose to run")
    run()
}


// const userFightSelect = readline.keyInSelect(userAttackOrRunInput,"Decide your fate ")

const runOrWalk = ["run", "walk"]

// let userChoice = readline.keyInSelect(userChoicesAfterNoDragon,"Be careful what you decide..")