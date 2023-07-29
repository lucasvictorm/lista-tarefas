let task = document.createElement('div');
let tagP = document.createElement('p');
let principal = document.getElementById("principal")

function newTask(){
    task.setAttribute("class", "task");
    task.classList.add("task-item");
    let texto = document.createTextNode("Textoooo")
    task.appendChild(texto);
    principal.appendChild(task);
    
}