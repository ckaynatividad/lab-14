// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { generateUser, setUser, getUser } from '../utils.js';

const test = QUnit.test;

test('generateUser function return a userObject', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = {
        userName: 'miklo',
        password: '12345'
    };
    const formData = new FormData();

    formData.set('userName', 'miklo');
    formData.set('password', '12345');
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = generateUser(formData);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('setUser should save user info to LS', (expect)=>{
    localStorage.removeItem('USER');
    const userObj = {
        userName: 'miklo',
        password: '12345'
    };
    setUser(userObj);

    const actual = JSON.parse(localStorage.getItem('USER'));

    expect.deepEqual(userObj, actual);
});

test('getUser should return userObject from LS', (expect)=>{
    const userObj = {
        userName: 'meow',
        password: 'meow'
    };

    setUser(userObj);
    const actual = getUser();

    expect.deepEqual(actual, userObj);
});