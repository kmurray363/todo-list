import './style.css';
import createMenuButton from './createMenuButton';
import createToDo from './createToDo';
import Local from './LocalStore';
import NewToDo from './modal.js';
import EditToDo from './modal.js';
import Project from './Projects.js';

Local.load();
Local.populate();
Project.load();
Project.populate();

const $projectDisplay = document.getElementById('project-display')

$projectDisplay.addEventListener("change", (event) =>{
    Local.filter(`${event.target.value}`);
})