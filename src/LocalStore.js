import displayToDo from "./displayToDo"

const $container = document.querySelector(".to-dos")

const Local = {
    storage: [],
    store: function(obj){
        console.log(this)
        this.storage.push(obj)
        this.save();
    },
    show: function() {
        console.log(this.storage)
    },

    populate: function () {
        this.storage.forEach((obj)=>{
            displayToDo(obj, $container);
        })
    },

    save: function() {
        localStorage.setItem("storage", JSON.stringify(this.storage))
    },

    load: function() {
        this.storage = JSON.parse(localStorage.getItem("storage") || "[]");
    }
}

export default Local;