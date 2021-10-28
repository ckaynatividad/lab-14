export function generateUser(formData) {
    return {
        userName: formData.get('userName'),
        password: formData.get('password')
    };
}

export function setUser(userObject) {

    localStorage.setItem('USER', JSON.stringify(userObject));
}

export function getUser(){
    const json = localStorage.getItem('USER');
    const parse = JSON.parse(json);
    if (!parse) return null;
    //const user = parse.name.toUpperCase();
    return parse;
}

