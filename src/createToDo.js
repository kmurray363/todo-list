import Local from './LocalStore';

const createToDo = (title, description, dueDate, priority, project) => {
    
    return{
        title,
        description,
        dueDate,
        priority,
        completed: false,
        project,
        index: Local.storage.length
    }
}

export default createToDo;