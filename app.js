import { setUser, generateUser } from './utils.js';

const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    
    const formData = new FormData(loginForm);
    const userObject = generateUser(formData);
    setUser(userObject);
    window.location.replace('./todos');

    // if statement here // 

});

