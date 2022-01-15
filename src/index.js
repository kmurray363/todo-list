import './style.css';
import createMenuButton from './createMenuButton';
import createToDo from './createToDo';
import Local from './LocalStore';
import Modal from './modal.js';

Local.load();
Local.populate();
