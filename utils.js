export function generateUser(formData) {
    return {
        userName: formData.get('userName'),
        password: formData.get('password')
    };
}

export function setUser(userObject) {

    localStorage.setItem('USER', JSON.stringify(userObject));
}