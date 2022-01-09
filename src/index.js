import './style.css';
import createMenuButton from './createMenuButton';
import newToDoDiv from './newToDoDiv';
import createToDo from './createToDo';
import Local from './LocalStore';

createMenuButton("Create New To-Do", newToDoDiv, "");
Local.load();
Local.populate();
