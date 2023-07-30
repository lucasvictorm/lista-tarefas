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

        editIcon.classList.add("material-symbols-outlined");
        editIcon.appendChild(document.createTextNode("edit"));

        checkIcon.classList.add("material-symbols-outlined");
        checkIcon.appendChild(document.createTextNode("check_circle"));

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

allTasks.forEach()

function deleteTask(){

}