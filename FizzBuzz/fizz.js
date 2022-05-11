let counts = {
    fizz: 0,
    buzz: 0,
    fizzBuzz: 0
}



console.log(counts)

// let fizz = 0
// let buzz = 0
// let fizzBuzz = 0

for (let i = 1; i <= 100; i++){
    if ( i % 3 === 0 & i % 5 === 0){
        counts.fizzBuzz += 1
        console.log("FizzBuzz")        
    } else if (i % 3 === 0){
        counts.fizz += 1
        console.log("Fizz")
    } else if (i % 5 === 0){
        counts.buzz += 1
        console.log("Buzz")
    } else {
        console.log(i)
    } 
}

console.log (counts)
