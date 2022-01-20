import Local from "./LocalStore";

const displayToDo = function(ToDoObj, appendTo){
    
    const outputDivContainer = document.createElement('div');
    outputDivContainer.classList.add('todo-card');
    outputDivContainer.classList.add(`index-${ToDoObj.index}`);

    const outputTitle = document.createElement('div');
    const outputDueDate = document.createElement('div');
    const outputPriority = document.createElement('div');
    const outputComplete = document.createElement('button');
    outputComplete.classList.add('remove-btn')


    outputTitle.innerHTML = ToDoObj['title'];
    outputDueDate.innerHTML = ToDoObj['dueDate'];
    outputPriority.innerHTML = ToDoObj['priority'];
    outputComplete.innerHTML = 'REMOVE ITEM';

    outputDivContainer.appendChild(outputTitle);
    outputDivContainer.appendChild(outputDueDate);
    outputDivContainer.appendChild(outputPriority);
    outputDivContainer.appendChild(outputComplete);

    outputComplete.onclick = (function(){
        Local.delete(ToDoObj.index);
        Local.populate();
    })

    outputDivContainer.onclick = (function(event){
        const indexClass = event['path'][0].classList[1];
        if(indexClass.slice(0,5) !== "index") return;
        const index = indexClass.slice(6);

        const editTarget = Local.getObj(index);
        
        const $editToDo = document.getElementById("editToDo");
        const $editTitle = document.getElementById("editTitle");
        const $editDesc = document.getElementById("editDesc");
        const $editDate = document.getElementById("editDate");
        const $editPrio = document.getElementById("editPrio");
        const $editProject = document.getElementById("editProject")
        const $submitEditBtn = document.getElementById("submitEditBtn")
        const $span = document.getElementsByClassName("close")[1];

        $editToDo.style.display = "block";

        $editTitle.value = editTarget["title"];
        $editDesc.value = editTarget["description"];
        $editDate.value = editTarget["dueDate"];
        $editPrio.value = editTarget["priority"];
        $editProject.value = editTarget["project"];

        $span.onclick = function() {
            $editToDo.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == newToDo) {
                $editToDo.style.display = "none";
            }
        }

        $submitEditBtn.onclick = function(){
            editTarget["title"] = $editTitle.value;
            editTarget["description"] = $editDesc.value;
            editTarget["dueDate"] = $editDate.value;
            editTarget["priority"] = $editPrio.value;
            editTarget["project"] = $editProject.value;
            
            Local.delete(index);
            Local.store(editTarget);
            const project = document.getElementById('project-display')
            Local.filter(project.value);

            $editToDo.style.display = "none";
        }
    })

    appendTo.appendChild(outputDivContainer);
}

export default displayToDo;