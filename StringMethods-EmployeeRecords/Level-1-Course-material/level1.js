var colorOfBox = document.getElementById("theBox")


document.getElementById("theBox").addEventListener("mouseover", function(){
    theBox.style.backgroundColor = "blue"
})

document.getElementById("theBox").addEventListener("mousedown", function(){
    theBox.style.backgroundColor = "red"
})

document.getElementById("theBox").addEventListener("dblclick", function(){
    theBox.style.backgroundColor = "green"
})

document.getElementById("theBox").addEventListener("mouseup", function(){
    theBox.style.backgroundColor = "gold"
})

document.getElementById("wholeBody").addEventListener("wheel", function(){
    theBox.style.backgroundColor = "orange"
})

document.getElementById("wholeBody").addEventListener("keypress", function(){
    theBox.style.backgroundColor = "pink"
})