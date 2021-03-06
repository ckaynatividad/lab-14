import { toDo } from './render.js';
import { getUser } from '../utils.js';

function loadUser(){
    //const toDo 
    // getUser from localStorage
    const user = getUser();
    // Update DOM with user info 
    const userName = document.getElementById('username');
    userName.textContent = user.userName;
    
}

loadUser();

const todoList = document.getElementById('todo-list');
export function renderToDo(listItem){
    const listItems = document.createElement('div');
    
    const liItem = document.createElement('li');
    liItem.textContent = listItem.todo;
    console.log(liItem);
    
    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Completed';
    completeBtn.classList.add('completeBtn');
    listItems.append(liItem, completeBtn);

    completeBtn.addEventListener('click', ()=>{
        console.log(completeBtn);
    
        liItem.classList.add('finished');
    
    });
    return listItems;
}
renderToDo(toDo.todos[0]);
    
for (let item of toDo.todos){
    const listItems = renderToDo(item);
        
    todoList.append(listItems);
}


