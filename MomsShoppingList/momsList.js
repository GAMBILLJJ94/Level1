
//form.addEventListener("submit", (event) => {
 //   event.preventDefault()
         
  //  ulList.innerHTML += "<li>" + form.title.value + "</li>" + "<span id='editBtn'><button >" + "edit" + "</button>" + "<button>"+ "X" + "</button></span>"


const form = document.addItem

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const newLi = document.createElement("li")
    const itemsList = document.getElementById("list")
    const inputValue = form.title.value
    form.title.value = ""
    itemsList.append(newLi)
    newLi.textContent += inputValue

    document.getElementsByTagName("ul")[0].append(newLi)
    var dltBtn = document.createElement("button")
    dltBtn.textContent = "X"
    newLi.append(dltBtn)
    dltBtn.addEventListener("click", () => {
        newLi.remove("li")
    })
 
    document.getElementsByTagName("ul")[0].append(newLi)
    var editBtn = document.createElement("button")
    var saveBtn = document.createElement("button")
    var inputBox = document.createElement("input")
    editBtn.textContent = "Edit"
    saveBtn.textContent = "Save"
    newLi.append(editBtn)
    editBtn.addEventListener("click", () => {
        newLi.append(inputBox)
    })

    editBtn.addEventListener("click", () => {
        if (editBtn.textContent === "Edit"){
            editBtn.textContent = "Save"
            //newLi.textContent = inputBox.value
            
        }
    })
})