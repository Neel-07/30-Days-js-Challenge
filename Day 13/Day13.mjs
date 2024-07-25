// Task-1 : Create a module that exports a function to add two numbers. Import and use this module in another script.

import { addNumbers } from './add.mjs';

const result = addNumbers(5, 3);
console.log('Result of adding:', result); // Output: 8


// Task-2 : Create a module that exports an object representing aperson with properties and methods. Import and use this module in another script.

import person from './person.mjs';

console.log(`Name: ${person.name}, Age: ${person.age}`);
person.sayHello(); // Output: Hello, I'm Alice!



// Task-3 : Create a module that exports multiple functions using named exports. Import and use these functions in another script.
import { capitalize, double } from './utils.mjs';

console.log(capitalize('hello')); // Output: Hello
console.log(double(7)); // Output: 14


// Task-4 : Create a module that exports a single function using default export. Import and use this function in another script.

import greet from './greet.mjs';

console.log(greet('Bob')); // Output: Hello, Bob!



// Task-5 : Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.

import { PI, grt } from './constant.mjs';

console.log('PI value:', PI); // Output: 3.14
console.log(grt('Eve')); // Output: Hello, Eve!



// Task-6 : Install a third-party module (e.g.. lodash) using npm. Import and use a function from this module in a script.

import _ from 'lodash';

const numbers = [1, 2, 3, 4, 5];
const sum = _.sum(numbers);
console.log('Sum of numbers:', sum); // Output: 15


// Task-7 : Instal a third-party module (e.g., axios) using npm. Import and use this module to make a network request in a script.
import axios from 'axios';

async function fetchData() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    console.log('Fetched data:', response.data);
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
}

fetchData();


// Task-8 : Use a module bundler like Webpack or Parcel to bundle multiple Javascript files into a single file. Write a script to demonstrate the bundling process.
//creation of file1.js, file2.js, file3.js
//Webpack.config.js
//dist folder
//index.html