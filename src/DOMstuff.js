
const DOMstuff = {
    clearToDos : function(){
        const container = document.querySelector('.to-dos');
        const toDos = document.querySelectorAll('.to-dos > .todo-card');
        for(const todoCard in toDos){
            if(todoCard === "entries") return;
            if(toDos.length < 1) return;
            container.removeChild(toDos[`${todoCard}`]);
        }
    },
}

export default DOMstuff;