import { onCreateTask } from './createTask.js';
import { onToggleTask } from './updateTask.js';

export const initTodoListHandlers = () => {
    const createBtnElem = document.querySelector('.create-task-btn');
    createBtnElem.addEventListener('click', onCreateTask);
    console.log('loh');
    const todoListElem = document.querySelector('.list');
    todoListElem.addEventListener('click', onToggleTask);
}