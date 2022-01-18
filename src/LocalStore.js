import displayToDo from "./displayToDo"
import DOMstuff from "./DOMstuff";

const $container = document.querySelector(".to-dos")

const Local = {
    storage: [],
    store: function(obj){
        this.storage.push(obj)
        this.save();
    },
    show: function() {
        console.log(this.storage)
    },

    populate: function () {   
        DOMstuff.clearToDos();  
        this.storage.forEach((obj)=>{
            displayToDo(obj, $container);
        })
    },

    save: function() {
        localStorage.setItem("storage", JSON.stringify(this.storage))
    },

    load: function() {
        this.storage = JSON.parse(localStorage.getItem("storage") || "[]");
    },

    delete: function(index){
        index = parseInt(index);
        const length = this.storage.length;
        for (let i = 0; i < length; i++){
            if(this.storage[i]['index'] === index){
                this.storage.splice(i, 1);
                this.save();
                return;
            }
        }
    },

    //takes an index, returns the object that has that index
    getObj: function(index){
        index = parseInt(index);
        const length = this.storage.length;
        for (let i = 0; i < length; i++){
            if(this.storage[i]['index'] === index){
                return this.storage[i];
            }
        }
    },
}

export default Local;