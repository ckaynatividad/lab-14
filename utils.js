export function generateUser(formData) {
    console.log(formData.get('username'));
    return {
        userName: formData.get('username'),
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

