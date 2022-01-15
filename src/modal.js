import createToDo from "./createToDo";
import Local from "./LocalStore";

const Modal = (function(){   
    // Get the modal
    const modal = document.getElementById("newToDo");

    // Get the button that opens the modal
    const btn = document.getElementById("createToDoBtn");

    // Get the <span> element that closes the modal
    const span = document.getElementsByClassName("close")[0];

    // Get submit button from modal
    const submitBtn = document.getElementById("submitBtn");

    // When the user clicks on the button, open the modal
    btn.onclick = function() {
    modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
      
    submitBtn.onclick = function(){
        const title = document.getElementById("toDoTitle");
        const description = document.getElementById("toDoDesc");
        const dueDate = document.getElementById("toDoDate");
        const priority = document.getElementById("toDoPrio");

        const newToDo = createToDo(title.value, description.value, dueDate.value, priority.value);
        Local.store(newToDo);
        Local.populate();
        
        //clear Modal Form
        title.value = "";
        description.value = "";
        dueDate.value = "";
        priority.value = "";

        //close form
        modal.style.display = "none";
    }
}());

export default Modal