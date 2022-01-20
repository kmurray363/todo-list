
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

    clearProjects : function(){
        const container = document.querySelector('#project-display');
        const projects = document.querySelectorAll('#project-display > option');
        for(const project in projects){
            if(project === "entries") return;
            if(projects.length < 1) return;
            container.removeChild(projects[`${project}`]);
        }
    }
}

export default DOMstuff;