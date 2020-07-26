

var list = document.getElementById("list")


function addTodo(){

var todoitem = document.getElementById("todo-item")
console.log(todoitem.value) 



// is se html ma li ka tag create ho jye ga 
var li = document.createElement('li')

var liText = document.createTextNode(todoitem.value) 

// is se tag ma data enter hoga 
li.appendChild(liText)
list.appendChild(li)

todoitem.value = ""

console.log(li)


// create delete btn
var delbtn = document.createElement("button")
var delText = document.createTextNode("delete")
delbtn.appendChild(delText)
delbtn.setAttribute("class","btn")
delbtn.setAttribute("onclick", "deleteitem(this)")
li.appendChild(delbtn)
 
//create edit btn

var editbtn = document.createElement("button")
var editText = document.createTextNode("EDIT")
editbtn.appendChild(editText)
editbtn.setAttribute("class","btn")



editbtn.setAttribute("onclick","editItem(this)")
li.appendChild(editbtn)
}

function deleteitem(e){
   
e.parentNode.remove()

} 


function editItem(e){
    
var val = prompt("enter edit value",e.parentNode.firstChild.nodeValue)
  

e.parentNode.firstChild.nodeValue = val;

}







function deleteall(){
list.innerHTML = ""

}




