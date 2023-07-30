let principal = document.getElementById("principal")
let tarefas = document.getElementById("tarefas")
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
        
        tarefas.appendChild(task);
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
    attNumTasks()
}

document.querySelector("body").addEventListener("click", (el) =>{
    const targEl = el.target;
    const parentEl = targEl.closest('div'); 

    if(targEl.id == "delete"){
        parentEl.remove();
        numtasks -= 1;
        attNumTasks();
        if(parentEl.classList.contains("checked")){    
            let concluidos = document.getElementById("tasks-concluidas")
            if(concluidos.children.length == 0){
                
                let textConcluidos = document.getElementById("texto-concluidos");
                textConcluidos.innerHTML = ""
                concluidos.remove();
            }
            return;
        }
    }
    if(targEl.id == "check"){
        if(principal.querySelector("#tasks-concluidas")== null){
            createCheckTasks()
        }
        let concluidos = document.getElementById("tasks-concluidas");
       
        if(parentEl.classList.contains("checked")){
            numCheckTasks -= 1;
            tarefas.appendChild(parentEl);
            parentEl.classList.toggle("checked");
            attNumTasks();
            if(concluidos.children.length == 0){
                let textConcluidos = document.getElementById("texto-concluidos");
                textConcluidos.innerHTML = ""
                concluidos.remove();
                return;
            }
            return;
        }else{
            numCheckTasks += 1;
            
        }
        
         
        parentEl.classList.toggle("checked");
        concluidos.appendChild(parentEl);
        attNumTasks();
    }
})

addEventListener("keydown", (key) => {
    if(key.key == "Enter"){
        newTask()
    }
})

function createCheckTasks(){
    let taskDiv = document.createElement("div");
    taskDiv.setAttribute("id", "tasks-concluidas");
    principal.appendChild(taskDiv);
}

function attNumTasks(){
    /*let textConcluidos = document.getElementById("texto-concluidos");
    if(numCheckTasks == 0){
        return;
    }else{
        textConcluidos.innerHTML = `<h2 id="h2-concluidos">Concluídos (${numCheckTasks}/${numtasks})</h2>`;
    }*/
    let textConcluidos = document.getElementById("texto-concluidos");
    let concluidos = document.getElementById("tasks-concluidas");
    if(concluidos == null){
        return;
    }else{
        textConcluidos.innerHTML = `<h2 id="h2-concluidos">Concluídos (${concluidos.children.length}/${numtasks})</h2>`;
    }
    
}

/*function verifyCheckedTask(parentEl){
    
}*/