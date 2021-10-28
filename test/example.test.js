// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { generateUser } from '../utils.js';

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
