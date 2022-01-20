import DOMstuff from "./DOMstuff";
import Local from "./LocalStore";

const Project = {
    projects: [],
    store: function(obj){
        this.projects.push(obj)
        this.save();
    },
    show: function() {
        console.log(this.projects)
    },

    save: function() {
        localStorage.setItem("projects", JSON.stringify(this.projects))
    },

    load: function() {
        this.projects = JSON.parse(localStorage.getItem("projects") || "[]");
    },

    populate: function () { 
        DOMstuff.clearProjects();
        this.store({
            title: "All Projects",
            index: 0,
        })
        const container = document.getElementById('project-display');   
        this.projects.forEach((obj)=>{
            const option = document.createElement('option');
            option.innerHTML = `${obj['title']}`;
            option.value = `${obj['title']}`;
            container.appendChild(option);
        })
    },

    delete: function(index){
        index = parseInt(index);
        const length = this.projects.length;
        for (let i = 0; i < length; i++){
            if(this.projects[i]['index'] === index){
                this.projects.splice(i, 1);
                this.save();
                return;
            }
        }
    },

    //takes an index, returns the object that has that index
    getObj: function(index){
        index = parseInt(index);
        const length = this.projects.length;
        for (let i = 0; i < length; i++){
            if(this.projects[i]['index'] === index){
                return this.projects[i];
            }
        }
    },
}

export default Project;