function addToDo(){
    let input = document.getElementById("toDoText")
    let toDoText = input.value
    input.value = " "
    let li = document.createElement("li")
    li.innerText = toDoText
    let del = document.createElement("a")
    del.innerText= "X"
    let toDoList = document.getElementById("toDoList")
    toDoList.appendChild(li)
    li.appendChild(del)
    li.addEventListener("click", function(){
        li.style.textDecoration = "line-through"
    })
    del.addEventListener("click", function(){
        li.remove()
    })
}
function delet(){
    toDoList.remove()
}