

//for (var i = 9; i >= 0; i = i -1){
//    console.log(i)
//}

// const fruit = ["banana", "orange", "apple", "kiwi"]

//for (var i = 0; i < fruit.length; i++){
//        console.log(fruit[i])
//    }

const nums = []

for (var i = 0; i < 101; i++){
    if (i % 2 ===0){
        nums.push(i)
}
}

// console.log(nums)

const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]

const newFruit = []

for (var i = 0; i < fruit.length; i=i+2){
    newFruit.push(fruit[i])
}

// console.log(newFruit)

const peopleArray = [
  {
    name: "Harrison Ford",
    occupation: "Actor"
  },
  {
    name: "Justin Bieber",
    occupation: "Singer"
  },
  {
    name: "Vladimir Putin",
    occupation: "Politician"
  },
  {
    name: "Oprah",
    occupation: "Entertainer"
  }
]

var names = []
var occupations = [] 

for (var i = 0; i < peopleArray.length; i++){
    names.push(peopleArray[i].name)
    occupations.push(peopleArray[i].occupation)
}

//console.log(names)
//console.log(occupations)

var eOName = []
var eOOccupation = []

for (var i = 0; i < peopleArray.length; i=i+2){
    eOName.push(peopleArray[i].name)
} for (var i = 1; i < peopleArray.length; i=i+2){
    eOOccupation.push(peopleArray[i].occupation)
}

console.log(eOName)
console.log(eOOccupation)

///console.log(eOName)
//console.log(eOOccupation)


//var arr = [];
//for (var j = 0; j < 3; j++) {
///  arr[j] = 0;
//}
//console.log(arr);

var arr = []

for (var i = 0; i < 3; i++){
    arr[i]=0
}
  //  for ( var j = 0; j < arr.length; j++){
  //      arr.push[i][j]
  //  }


console.log(arr)