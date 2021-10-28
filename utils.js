export function generateUser(formData) {
    return {
        userName: formData.get('username'),
        password: formData.get('password')
    };
}

export function setUser(userObject) {
    
    localStorage.setItem('USER', JSON.stringify(userObject));
}