let principal = document.getElementById("principal");
let tarefas = document.getElementById("tarefas");

tarefas.parentElement
let numtasks = 0;
let numCheckTasks = 0;
let taskId = 0;
const allTasks = document.querySelectorAll(".task-item")

function  createTask(text) {
        taskId += 1;
        let tagP = document.createElement("p");
        let deleteIcon = document.createElement("span");
        let editIcon = document.createElement("span");
        let checkIcon = document.createElement("span");
        let task = document.createElement('div');

        task.setAttribute("class", "task");
        task.setAttribute("id", taskId);
        task.classList.add("task-item");

        deleteIcon.classList.add("material-symbols-outlined");
        deleteIcon.appendChild(document.createTextNode("delete"));
        deleteIcon.setAttribute("id", "delete");

        editIcon.classList.add("material-symbols-outlined");
        editIcon.appendChild(document.createTextNode("edit"));
        editIcon.setAttribute("id", "edit");

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

function newTask(){
    let textoTask = document.getElementById("textoTask");
    if(textoTask.value == ''){
        return;
    }
    createTask(textoTask.value)
    numtasks += 1;
    attNumTasks()
}

principal.addEventListener("click", (el) =>{
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
            }
            return;
        }
    }
    if(targEl.id == "check"){
        checkTask(parentEl);
    }
    if(targEl.id == "edit"){
        let tagP = parentEl.getElementsByTagName("p");
        editTask(tagP[0], parentEl);
    }
})

addEventListener("keydown", (key) => {
    if(key.key == "Enter"){
        newTask()
    }
})

function attNumTasks(){
    let textConcluidos = document.getElementById("texto-concluidos");
    let concluidos = document.getElementById("tasks-concluidas");
    if(concluidos.children.length == 0){
        return;
    }else{
        textConcluidos.innerHTML = `<h2 id="h2-concluidos">Concluídos (${concluidos.children.length}/${numtasks})</h2>`;
    }
    
}

function checkTask(parentEl){
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

function editTask(text, parent){
    console.log(text)
    let areaEdit = document.getElementById("area-edit");
    if(!areaEdit.classList.contains("hidden")){
        return;
    }
    let textoEdit = document.getElementById("texto-editado");
    textoEdit.value = text.innerText;
    areaEdit.classList.toggle("hidden");
    var objText = text;
   /* areaEdit.addEventListener("click", (targ) =>{
        if(targ.id == "finish"){
            text.innerText = textoEdit.value;
            console.log(text.innerText)
            //parent.getElementsBytagName("")
            //textoEdit.value
        }
    })*/
    
}

console.log(objText);