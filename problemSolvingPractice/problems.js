let largestNum = [3, 5, 2, 8, 1]

function largest (num){
    let largestNum = [3, 5, 2, 8, 1]
    for (let i = 0; i < num.length; i++){
        for(let j = 0; j < num[i].length; j++)
        if (num[i][j] > num[j]){
            console.log(num[j])
        }
    }
}

largest(largestNum)





let lettersWithStrings = ["#3", "$$$", "C%4!", "Hey!", "!"]

function isItHere (arr,char){
    for (let i = 0; i < lettersWithStrings.length; i++){
        for(let j = 0; j < lettersWithStrings[i].length; j++){
            if([i][j] = "$"){
            console.log(lettersWithStrings[i][j])
            }
        }
    }
}

isItHere(lettersWithStrings,"C")






function isDivisible(num1,num2){
    if(num1 % num2 === 0){
        console.log("is divisible")
    }else {
      console.log("is not divisible")
    }
}


isDivisible(8,3)