var myName = "Joey"

myName.toLowerCase

var toAllCaps = function allCaps (string) {
    return (string.toUpperCase()+string.toLowerCase())
} 

console.log(toAllCaps(myName))

var chiBears = "Chicago Bears"

var sentence = "Hello Worlds"

var halfRoundedDown = function halfRoundedD (string){
    return Math.floor(string.length / 2)
}

halfRoundedDown(chiBears)

console.log(halfRoundedDown(sentence))

var sliced = function cutUp (string){
    return string.slice(0,string.length/2)
}

console.log(sliced(sentence))

var halfHALF = function capHalf (string){
    var stringHalf = string.length/2
    return string.slice(0,stringHalf).toUpperCase() + string.slice(stringHalf).toLowerCase()
}

console.log(halfHALF(sentence))

