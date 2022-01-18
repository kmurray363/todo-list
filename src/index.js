import './style.css';
import createMenuButton from './createMenuButton';
import createToDo from './createToDo';
import Local from './LocalStore';
import NewToDo from './modal.js';

Local.load();
Local.populate();
