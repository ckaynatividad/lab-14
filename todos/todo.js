import { toDo } from './render.js';
import { setUser, generateUser, getUser } from '../utils.js';

function loadUser(){
    
    //const toDo 
    // getUser from localStorage
    const user = getUser();
    // Update DOM with user info 
    const userName = document.getElementById('username');
    const passWord = document.getElementById('password');
}

export function renderToDo(listItem){
    const listItems = document.createElement('div');

    const liItem = document.createElement('li');
    listItem.textContent = toDo.todos;

   
    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Completed?';
    completeBtn.classList.add('finished');

    renderToDo.append(listItems, liItem, completeBtn);
    return renderToDo;
} 
console.log(toDo.todos[0]);

const todoList = document.getElementById('todo-list');

// for (let item of ){
//     const listItems = renderToDo(item);
//     todoList.append(listItems);
// }