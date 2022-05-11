const readline = require("readline-sync");
let {playerHealth} = require('./dungeon');


function randomNum (){
    return Math.random()
}

function checkInventory (){
    console.log(inventory)
}

function endGameWin(){
    console.log("You have won, the game is over. Congratulations.")
}

function endGameLose(){
    console.log("You have won, the game is over. Congratulations.")
}

// function dragonFights () {
//     if (dragon1){
//         console.log("dragon fights dragon 1")
//     } else if (userFight === "r"){
//         run()
//     }
// }

function fightDragon1(){
    const userInput = readline.question("(f) to fight, (r) to try and run and evade the dragon at a'50% chance of evasion'")
    if (userInput === "f"){
        console.log("You deal damage to Deminch")
        dragons[0].health = 0
        console.log("You have defeated Deminchand obtain a Ruby Sceptor for defeating the beast!! Congratulations! Now back to trying to escape this dungeon!")
        console.log("Ruby Sceptor was added to your inventory") 
        inventory.push("Ruby Sceptor")
        } else if (userInput === "r"){
            if (random <= .5){
                console.log("Somehow you evaded danger but took a minor blow to the side!! You now continue your journey through the dungeon!")
                playerHealth -= 20
                console.log("You have " + playerHealth + " hp remaining.")
                run()  
             }
             if (random > .5){
                console.log("You could not evade danger and Zimae takes a swing and lands a blow to your chest, the fight is not over you must try to fight Deminch once more!")
                playerHealth -=30
                console.log("You have " + playerHealth + " hp remaining.")
                 fightDragon1()
             }
        }
}


function fightDragon2(){
    const userInput = readline.question("(f) to fight, (r) to try and run and evade the dragon at a'50% chance of evasion'")
    if (userInput === "f"){
        console.log("You deal damage to Gathalia")
        dragons[1].health = 0
        console.log("You have defeated Gathalia and obtain a gold challace for defeating the beast!! Congratulations! Now back to trying to escape this dungeon!")
        console.log("Gold Challace was added to your inventory")
        inventory.push("Gold Challace")
        } else if (userInput === "r"){
            random = Math.random()
            if (random <= .5){
                console.log("Somehow you evaded danger but took a minor blow to the side!! You now continue your journey through the dungeon!")
                playerHealth -= 20
                console.log("You have " + playerHealth + " hp remaining.")
                run()  
            }
            if (random > .5){
                console.log("You could not evade danger and Zimae takes a swing and lands a blow to your chest, the fight is not over you must try to fight Gathalia once more!")
                 playerHealth -=30
                 console.log("You have " + playerHealth + " hp remaining.")
                fightDragon2()
            }
        }
}


function fightDragon3(){
    const userInput = readline.question("(f) to fight, (r) to try and run and evade the dragon at a'50% chance of evasion'")
    if (userInput === "f"){
        console.log("You deal damage to Zimae")
        dragons[2].health = 0
        console.log("You have defeated Zimae and obtain a Gold eyepatch for defeating the beast!! Congratulations! Now back to trying to escape this dungeon!")
        console.log("Gold eyepatch was added to your inventory") 
        inventory.push("Gold Eyepatch")
        } else if (userInput === "r"){
            if (random <= .5){
                console.log("Somehow you evaded dangerbut took a minor blow to the side!! You now continue your journey through the dungeon!")
                playerHealth -= 20
                console.log("You have " + playerHealth + " hp remaining.")
                run()  
             }
             if (random > .5){
                 console.log("You could not evade danger and Zimae takes a swing and lands a blow to your chest, the fight is not over you must try to fight Zimae once more!")
                 playerHealth -=30
                 console.log("You have " + playerHealth + " hp remaining.")
                 fightDragon3()
             }
        }
}
        
function run(){
    random = Math.floor()
    if (random >= .51){
        console.log("You have taken your chances and luckily evaded the dragon and begin walking again")
        walk()
    } else if (random < .51){
        console.log("You have taken your chances at running but unfortunately could not evade the dragon")
        const dragonCaughtYou = readline.question("(f) to fight, (r) to run")
        if (dragonCaughtYou === "f"){
            console.log("you chose to fight")
        } else if (dragonCaughtYou === "r"){
            console.log("You chose to run")
        } 
    }
}

function encounter(){
    random = Math.random()
    if (random <.33){
        console.log("You have encountered " + dragons[0].name + " the Wicked! Be careful of his claws!")
        fightDragon1()
    } else if ((random >= .33) && (random < .67)){
        console.log("You have encountered " + dragons[1].name + " the Tormentor! He is beastly!")
        fightDragon2()
    } else if (random >= .67){
        console.log("You have encountered " + dragons[2].name + " the Great! She is wicked!")
        fightDragon3()
    }
}


let inventory = []

// let enemies = [
//     dragon1: {
//         name = 
//     }
// ]


let dragons = [
    {
    name: "Deminch",
    health: 100
}, {
    name: "Gathalia",
    health: 100
},{
    name: "Zimae",
    health: 100
}]


module.exports = {
    randomNum,
    checkInventory,
    run,
    inventory,
    dragons,
    encounter,
    fightDragon1,
    fightDragon2,
    fightDragon3,
    endGameLose,
    endGameWin,

}