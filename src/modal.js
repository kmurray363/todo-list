import createToDo from "./createToDo";
import Local from "./LocalStore";

const createModal = function(modalID, DOMelement, button){
    //create modal and append to target DOMelement
    const modal = document.createElement('div');
    modal.setAttribute('id', `${modalID}`);
    modal.classList.add('modal');
    DOMelement.appendChild(modal);

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    modal.appendChild(modalContent);

    const span = document.createElement('span');
    span.classList.add('close');
    span.innerHTML = "&times;";
    span.onclick = function() {
        modal.style.display = "none"
    };
    modalContent.appendChild(span);

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    // When the user clicks on the button, open the modal
    button.onclick = function() {
        modal.style.display = "block";
    }

    return modalContent;
}

const NewToDo = (function(){   
    // Get the newToDo Modal
    const container = document.querySelector(".to-dos");
    const createToDoBtn = document.getElementById("createToDoBtn");

    //create Modal Container and grab container to append to
    const modalContent = createModal("newToDo", container, createToDoBtn);

    //grab modal from DOM
    const newToDo = document.getElementById("newToDo");

    //create submit button
    const submitBtn = document.createElement("button");
    submitBtn.setAttribute("id", "submitBtn");
    submitBtn.innerHTML = "SUBMIT";

    //create Modal Contents
    const modalTitle = document.createElement('h2');
    modalTitle.innerHTML = "New To-Do Item"

    const titleLabel = document.createElement('label');
    titleLabel.innerHTML = "Title";

    const titleInput = document.createElement('input');
    titleInput.setAttribute('id', 'toDoTitle');
    titleInput.value = "Title";

    const descLabel = document.createElement('label');
    descLabel.innerHTML = "Description"

    const descInput = document.createElement('textarea');
    descInput.setAttribute('id', 'toDoDesc');
    descInput.value = "Description";

    const dateLabel = document.createElement('label');
    dateLabel.innerHTML = "Due Date";

    const dateInput = document.createElement('input');
    dateInput.setAttribute('id', 'toDoDate');
    dateInput.type = "date";
    dateInput.value = "2022-01-01";

    const prioLabel = document.createElement('label');
    prioLabel.innerHTML = "Priority";

    const prioInput = document.createElement('select');
    prioInput.setAttribute('id', 'toDoPrio');

    const prioOptionOne = document.createElement('option');
    prioOptionOne.value = "Low";
    prioOptionOne.innerHTML = "Low";

    const prioOptionTwo = document.createElement('option');
    prioOptionTwo.value = "Medium";
    prioOptionTwo.innerHTML = "Medium";

    const prioOptionThree = document.createElement('option');
    prioOptionThree.value = "High";
    prioOptionThree.innerHTML = "High";

    //Append Contents
    const Contents = [modalTitle, titleLabel, titleInput, descLabel, descInput, dateLabel, dateInput, prioLabel, prioInput, submitBtn]
    for(let ele in Contents){
        modalContent.appendChild(Contents[ele]);
    }
      
    submitBtn.onclick = function(){
        const title = document.getElementById("toDoTitle");
        const description = document.getElementById("toDoDesc");
        const dueDate = document.getElementById("toDoDate");
        const priority = document.getElementById("toDoPrio");

        const newToDoObj = createToDo(title.value, description.value, dueDate.value, priority.value);
        Local.store(newToDoObj);
        Local.populate();
        
        //clear Modal Form
        title.value = "";
        description.value = "";
        dueDate.value = "";
        priority.value = "";

        //close form
        newToDo.style.display = "none";
    }
}());

const EditToDo = (function(){
})

export default NewToDo