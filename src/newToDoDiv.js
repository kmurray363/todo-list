import createToDo from "./createToDo";
import displayToDo from "./displayToDo";
import Local from "./LocalStore.js";

const newToDoDiv = () => {
    const $container = document.querySelector('.to-dos');
    const divContainer = document.createElement('div');
    divContainer.classList.add('todo-card');

    const title = document.createElement('input');
    const description = document.createElement('textarea');
    const dueDate = document.createElement('input');

    // creating dropdown options
    const priority = document.createElement('select');
    const prioLow = document.createElement('option');
    prioLow.value = "Low";
    prioLow.innerHTML = "Low";
    const prioMedium = document.createElement('option');
    prioMedium.value = "Medium";
    prioMedium.innerHTML = "Medium";
    const prioHigh = document.createElement('option');
    prioHigh.value = "High";
    prioHigh.innerHTML = "High";
    priority.appendChild(prioLow);
    priority.appendChild(prioMedium);
    priority.appendChild(prioHigh);
    priority.value = "Priority";


    const complete = document.createElement('button');
    complete.classList.add('complete-btn')

    dueDate.type = "date";
    complete.innerHTML = "SUBMIT";

    title.value = "Title";
    description.value = "Description";
    description.classList.add('todo-desc')
    dueDate.valueAsDate = new Date();
    priority.value = "Priority";

    complete.addEventListener("click", (e) => {
        $container.removeChild(divContainer);
        const toDoItem = createToDo(title.value, description.value, dueDate.value, priority.value);
        Local.store(toDoItem);
        
        displayToDo(toDoItem, $container);
    });

    divContainer.appendChild(title);
    divContainer.appendChild(description);
    divContainer.appendChild(dueDate);
    divContainer.appendChild(priority);
    divContainer.appendChild(complete);

    $container.appendChild(divContainer);
}

export default newToDoDiv;