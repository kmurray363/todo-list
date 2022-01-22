import createToDo from "./createToDo";
import Local from "./LocalStore";
import Project from "./Projects";

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
    if(button){ 
        button.onclick = function() {
            modal.style.display = "block";
        }
    }
    return modalContent;
}

const NewToDo = (function(){   
    // Get the newToDo Modal
    const container = document.querySelector(".main");
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

    prioInput.appendChild(prioOptionOne);
    prioInput.appendChild(prioOptionTwo);
    prioInput.appendChild(prioOptionThree);

    //Project List
    const projectLabel = document.createElement('label');
    projectLabel.innerHTML = "Project";

    const projectInput = document.createElement('select');
    projectInput.setAttribute('id', 'toDoProject');

    Project.load();
    for(let ele in Project.projects){
        const option = document.createElement('option');;
        option.value = `${Project.projects[ele]['title']}`;
        option.innerHTML = `${Project.projects[ele]['title']}`;
        projectInput.appendChild(option);
    }

    //Append Contents
    const Contents = [modalTitle, titleLabel, titleInput, descLabel, descInput, dateLabel, dateInput, prioLabel, prioInput, projectLabel, projectInput, submitBtn]
    for(let ele in Contents){
        modalContent.appendChild(Contents[ele]);
    }
      
    submitBtn.onclick = function(){
        const title = document.getElementById("toDoTitle");
        const description = document.getElementById("toDoDesc");
        const dueDate = document.getElementById("toDoDate");
        const priority = document.getElementById("toDoPrio");
        const project = document.getElementById("toDoProject")

        const newToDoObj = createToDo(title.value, description.value, dueDate.value, priority.value, project.value);
        Local.store(newToDoObj);
        Local.populate();
        
        //clear Modal Form
        title.value = "Title";
        description.value = "Description";
        dueDate.value = "1/1/2022";
        priority.value = "Medium";

        //close form
        newToDo.style.display = "none";
    }
}());

const EditToDo = (function(){
     // to-do container
     const container = document.querySelector(".main");
 
     //create Modal Container and grab container to append to
     const modalContent = createModal("editToDo", container);
 
     //grab modal from DOM
     const editToDo = document.getElementById("editToDo");
 
     //create Submit Edit button
     const submitEditBtn = document.createElement("button");
     submitEditBtn.setAttribute("id", "submitEditBtn");
     submitEditBtn.innerHTML = "SUBMIT EDIT";
 
     //create Modal Contents
     const modalTitle = document.createElement('h2');
     modalTitle.innerHTML = "Edit Item"
 
     const titleLabel = document.createElement('label');
     titleLabel.innerHTML = "Title";
 
     const titleInput = document.createElement('input');
     titleInput.setAttribute('id', 'editTitle');
 
     const descLabel = document.createElement('label');
     descLabel.innerHTML = "Description"
 
     const descInput = document.createElement('textarea');
     descInput.setAttribute('id', 'editDesc');
 
     const dateLabel = document.createElement('label');
     dateLabel.innerHTML = "Due Date";
 
     const dateInput = document.createElement('input');
     dateInput.setAttribute('id', 'editDate');
     dateInput.type = "date";
 
     const prioLabel = document.createElement('label');
     prioLabel.innerHTML = "Priority";
 
     const prioInput = document.createElement('select');
     prioInput.setAttribute('id', 'editPrio');
 
     const prioOptionOne = document.createElement('option');
     prioOptionOne.value = "Low";
     prioOptionOne.innerHTML = "Low";
 
     const prioOptionTwo = document.createElement('option');
     prioOptionTwo.value = "Medium";
     prioOptionTwo.innerHTML = "Medium";
 
     const prioOptionThree = document.createElement('option');
     prioOptionThree.value = "High";
     prioOptionThree.innerHTML = "High";

     prioInput.appendChild(prioOptionOne);
     prioInput.appendChild(prioOptionTwo);
     prioInput.appendChild(prioOptionThree);

     //Project List
     const projectLabel = document.createElement('label');
     projectLabel.innerHTML = "Project";

     const projectInput = document.createElement('select');
     projectInput.setAttribute('id', 'editProject');

     Project.load();
     for(let ele in Project.projects){
         const option = document.createElement('option');;
         option.value = `${Project.projects[ele]['title']}`;
         option.innerHTML = `${Project.projects[ele]['title']}`;
         projectInput.appendChild(option);
     }

 
     //Append Contents
     const Contents = [modalTitle, titleLabel, titleInput, 
                       descLabel, descInput, dateLabel, 
                       dateInput, prioLabel, prioInput, 
                       projectLabel, projectInput, submitEditBtn]
     for(let ele in Contents){
         modalContent.appendChild(Contents[ele]);
     }
}());

const NewProject = (function(){
    // Get the new project container
    const container = document.querySelector(".main");

    // get button to open project
    const newProjectBtn = document.getElementById('createNewProject');

    //create Modal Container and grab container to append to
    const modalContent = createModal("newProject", container, newProjectBtn);

    //get whole modal
    const newProjectModal = document.getElementById("newProject");

    //add Modal Content
    const modalTitle = document.createElement('h2');
    modalTitle.innerHTML = "New Project";

    const projectTitle = document.createElement('label');
    projectTitle.innerHTML = "Project Name"
    
    const projectInput = document.createElement('input');
    projectInput.value = "New Project";

    const submitProjectBtn = document.createElement('button');
    submitProjectBtn.innerHTML = "SUBMIT";

    //add project to project storage
    submitProjectBtn.onclick = function(){
        const newProject = {
            title: projectInput.value,
            index: Project.projects.length
        }
        Project.store(newProject);
        Project.save();
        Project.populate();
        
        //clear Modal Form
        projectInput.value = "";

        //close form
        newProjectModal.style.display = "none";
    }

    modalContent.appendChild(modalTitle);
    modalContent.appendChild(projectTitle);
    modalContent.appendChild(projectInput);
    modalContent.appendChild(submitProjectBtn);
}());

export { EditToDo, NewToDo, NewProject };