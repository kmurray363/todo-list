import Local from "./LocalStore";

const displayToDo = function(ToDoObj, appendTo){
    
    const outputDivContainer = document.createElement('div');
    outputDivContainer.classList.add('todo-card');
    outputDivContainer.classList.add(`index-${ToDoObj.index}`);

    const outputTitle = document.createElement('div');
    const outputDescription = document.createElement('textarea');
    outputDescription.readOnly = true;
    outputDescription.classList.add('todo-desc')
    const outputDueDate = document.createElement('div');
    const outputPriority = document.createElement('div');
    const outputComplete = document.createElement('button');
    outputComplete.classList.add('remove-btn')


    outputTitle.innerHTML = ToDoObj['title'];
    outputDescription.innerHTML = ToDoObj['description'];
    outputDueDate.innerHTML = ToDoObj['dueDate'];
    outputPriority.innerHTML = ToDoObj['priority'];
    outputComplete.innerHTML = 'REMOVE ITEM';

    outputDivContainer.appendChild(outputTitle);
    outputDivContainer.appendChild(outputDescription);
    outputDivContainer.appendChild(outputDueDate);
    outputDivContainer.appendChild(outputPriority);
    outputDivContainer.appendChild(outputComplete);

    outputComplete.onclick = (function(){
        Local.delete(ToDoObj.index);
        Local.populate();
    })

    appendTo.prepend(outputDivContainer);
}

export default displayToDo;