let principal = document.getElementById("principal")
const allTasks = document.querySelectorAll(".task-item")
let numtask = 0;
class Task{
    constructor(name){
        this.name = name;
    }
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


        /*<span class="material-symbols-outlined">
        delete
        </span>*/
    }
    
}

function newTask(){
    let textoTask = document.getElementById("textoTask");
    if(textoTask.value == ''){
        return;
    }
    numtask += 1;
    let objTask = new Task(`task${numtask}`)
    objTask.createTask(textoTask.value)
    
}

document.querySelector("body").addEventListener("click", (el) =>{
    const targEl = el.target;
    const parentEl = targEl.closest('div'); 

    if(targEl.id == "delete"){
        parentEl.remove();
    }
    if(targEl.id == "check"){
        parentEl.classList.toggle("checked");
    }
})

addEventListener("keydown", (key) => {
    if(key.key == "Enter"){
        newTask()
    }
})