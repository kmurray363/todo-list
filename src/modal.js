import createToDo from "./createToDo";
import Local from "./LocalStore";

const Modal = (function(){   
    // Get the newToDo Modal
    const newToDo = document.getElementById("newToDo");

    // Get the button that opens the newToDo modal
    const createToDoBtn = document.getElementById("createToDoBtn");

    // Get the <span> element that closes the newToDo modal
    const span = document.getElementsByClassName("close")[0];

    // Get submit button from newToDo modal
    const submitBtn = document.getElementById("submitBtn");

    // When the user clicks on the button, open the modal
    createToDoBtn.onclick = function() {
    newToDo.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    newToDo.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == newToDo) {
            newToDo.style.display = "none";
        }
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

export default Modal