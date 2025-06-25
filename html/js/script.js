function add(){
    
    let texto = document.getElementById("tarefa").value

    let li =document.createElement("li")
    if(texto === ""){
        alert("Digite alguma tarefa")
        return
    }
    li.innerHTML = texto + '<span onclick="del(this)">❌</span>'
    
    document.querySelector("ul").appendChild(li) 

    document.getElementById("tarefa").value = ""
    tarefa.focus()
    
}

function del(li){
    li.parentElement.remove()
}