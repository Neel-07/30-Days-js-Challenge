const { LocalStorage } = require('node-localstorage');
const localStorage = new LocalStorage('./scratch');
global.localStorage = new LocalStorage('./localStorage');
global.sessionStorage = new LocalStorage('./sessionStorage');


// Task - 1 : Write a script to save a string value to localStorage and retirve it. Log the retrieved value.

// Save a string value to localStorage
localStorage.setItem('myString', 'Hello, World!');

// Retrieve and log the string value from localStorage
const retrievedString = localStorage.getItem('myString');
console.log(retrievedString);



// Task - 2 : Write a script to save an object to LocalStorage by converting it to a JSON string. Retrieve and parse the object, then log it.

// Save an object to localStorage
const myObject = { name: 'John', age: 30 };
localStorage.setItem('myObject', JSON.stringify(myObject));

// Retrieve and log the object from localStorage
const retrievedObject = JSON.parse(localStorage.getItem('myObject'));
console.log(retrievedObject);




// Task - 3 : Create a simple form that saves user input (e.g, name and email) to LocalStorage when submitted. Retrieve and display the saved data on page load.
 
// see the separate file for task 3

// Task - 4 : Write a script to remove an  item from localStorage. Log the localStorage content before and after removal 

// Save an item to localStorage
localStorage.setItem('myItem', 'This is a test item');

// Log the content of localStorage before removal
console.log('Before removal:', localStorage.getItem('myItem'));

// Remove the item from localStorage
localStorage.removeItem('myItem');

// Log the content of localStorage after removal
console.log('After removal:', localStorage.getItem('myItem'));


// Task - 5 : Write a script to save a string value to sessionStorage and retireve it. Log the retrieved value.

// Save a string value to sessionStorage
sessionStorage.setItem('myString', 'Hello, Session!');

// Retrieve and log the string value from sessionStorage
const retrievedString1 = sessionStorage.getItem('myString');
console.log(retrievedString1);




// Task - 6 : Write a script to save an object sessionsotrae by converting it to a JSON string. Retrieve and parse the object, then log it.

// Save an object to sessionStorage
const myObject2 = { name: 'Jane', age: 25 };
sessionStorage.setItem('myObject2', JSON.stringify(myObject2));

// Retrieve and parse the object from sessionStorage
const retrievedObject2 = JSON.parse(sessionStorage.getItem('myObject2'));
console.log(retrievedObject2);


// Task - 7 : Create a simple form that saves user input (e.g., name and email)  to sessionStorage when submitted. Retrieve and display the saved data on page load.
// see the separate file for task 7


// Task - 8 : Write a script to remove an iem form sessionStorage. Log the sessionStorage content before and after removal.

// Save an item to sessionStorage
sessionStorage.setItem('myItem', 'This is a test item');

// Log the content of sessionStorage before removal
console.log('Before removal:', sessionStorage.getItem('myItem'));

// Remove the item from sessionStorage
sessionStorage.removeItem('myItem');

// Log the content of sessionStorage after removal
console.log('After removal:', sessionStorage.getItem('myItem'));


// Task - 9 : Write a function that accepts a key and a value, and saves the value to both localStorage and sessionStorage. Retrieve and log the values from both storage mechanisms.

function saveToBothStorages(key, value) {
    localStorage.setItem(key, value);
    sessionStorage.setItem(key, value);

    const localStorageValue = localStorage.getItem(key);
    const sessionStorageValue = sessionStorage.getItem(key);

    console.log(`localStorage: ${localStorageValue}`);
    console.log(`sessionStorage: ${sessionStorageValue}`);
}

// Example usage
saveToBothStorages('myKey', 'myValue');

// Task - 10 : Write a function that clears all data from both localStorage and sessionStorage. Verify that both storages are empty.

function clearAllStorages() {
    localStorage.clear();
    sessionStorage.clear();

    console.log('localStorage is empty:', localStorage.length === 0);
    console.log('sessionStorage is empty:', sessionStorage.length === 0);
}

// Example usage
clearAllStorages();


