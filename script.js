let principal = document.getElementById("principal")
let numtasks = 0;
let numCheckTasks = 0;
const allTasks = document.querySelectorAll(".task-item")
class Task{
    createTask(text) {
        let tagP = document.createElement("p");
        let deleteIcon = document.createElement("span");
        let editIcon = document.createElement("span");
        let checkIcon = document.createElement("span");
        let task = document.createElement('div');

        task.setAttribute("class", "task");
        task.classList.add("task-item");

        deleteIcon.classList.add("material-symbols-outlined");
        deleteIcon.appendChild(document.createTextNode("delete"));
        deleteIcon.setAttribute("id", "delete");

        editIcon.classList.add("material-symbols-outlined");
        editIcon.appendChild(document.createTextNode("edit"));

        checkIcon.classList.add("material-symbols-outlined");
        checkIcon.appendChild(document.createTextNode("check_circle"));
        checkIcon.setAttribute("id", "check");

        let texto = document.createTextNode(text)
        tagP.appendChild(texto);
        task.appendChild(tagP);
        task.appendChild(editIcon);
        task.appendChild(deleteIcon);
        task.appendChild(checkIcon);
        
        principal.appendChild(task);
        textoTask.value = "";
    }
    
}

function newTask(){
    let textoTask = document.getElementById("textoTask");
    if(textoTask.value == ''){
        return;
    }
    let objTask = new Task()
    objTask.createTask(textoTask.value)
    numtasks += 1;
}

document.querySelector("body").addEventListener("click", (el) =>{
    const targEl = el.target;
    const parentEl = targEl.closest('div'); 

    if(targEl.id == "delete"){
        parentEl.remove();
    }
    if(targEl.id == "check"){
        let concluidos = document.getElementById("tasks-concluidas");
       
        if(parentEl.classList.contains("checked")){
            numCheckTasks -= 1;
            principal.appendChild(parentEl);
            parentEl.classList.toggle("checked");
            concluidos.innerHTML = '';
            return;
            //concluidos.remove(parentEl);
        }else{
            numCheckTasks += 1;
            
        }
        if(numCheckTasks == 1){
            concluidos.innerHTML += `<h2 id="concluidos">Concluídos (1/1)</h2>`;
        }else{
            concluidos.innerHTML = '';
        }
        
        parentEl.classList.toggle("checked");
        concluidos.appendChild(parentEl)
        
        console.log(numCheckTasks)
        
    }
})

addEventListener("keydown", (key) => {
    if(key.key == "Enter"){
        newTask()
    }
})