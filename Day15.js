// Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.
function outerFunction() {
    const outerVariable = "I am from the outer function";

    function innerFunction() {
        console.log(outerVariable);
    }

    return innerFunction;
}

const myInnerFunction = outerFunction();
myInnerFunction(); // Logs: "I am from the outer function"


// Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.
function createCounter() {
    let count = 0;

    return {
        increment: function () {
            count++;
        },
        getCount: function () {
            return count;
        }
    };
}

const counter = createCounter();
counter.increment();
counter.increment();
console.log(counter.getCount()); // Logs: 2



// Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.

function createUniqueIdGenerator() {
    let lastId = 0;

    return function () {
        lastId++;
        return `ID_${lastId}`;
    };
}

const generateId = createUniqueIdGenerator();
console.log(generateId()); // Logs: "ID_1"
console.log(generateId()); // Logs: "ID_2"


// Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.

function greetUser(userName) {
    return function () {
        console.log(`Hello, ${userName}!`);
    };
}

const greetAlice = greetUser("Alice");
greetAlice(); // Logs: "Hello, Alice!"


// Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.
function createFunctionsArray() {
    const functionsArray = [];
    for (let i = 0; i < 5; i++) {
      functionsArray.push(function () {
        console.log(`Function at index ${i} called.`);
      });
    }
    return functionsArray;
  }
  
  const myFunctions = createFunctionsArray();
  myFunctions[0]; // Logs: "Function at index 0 called."
  myFunctions[2]; // Logs: "Function at index 2 called."
  
  


// Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.
function createItemModule() {
    const items = [];
  
    return {
      addItem: function (item) {
        items.push(item);
      },
      removeItem: function (item) {
        const index = items.indexOf(item);
        if (index !== -1) {
          items.splice(index, 1);
        }
      },
      listItems: function () {
        return items;
      },
    };
  }
  
  const itemManager = createItemModule();
  itemManager.addItem("Apple");
  itemManager.addItem("Banana");
  itemManager.removeItem("Apple");
  console.log(itemManager.listItems()); // Logs: ["Banana"]
  


// Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.
function memoize(fn) {
    const cache = {};
  
    return function (...args) {
      const key = JSON.stringify(args);
      if (cache[key] === undefined) {
        cache[key] = fn(...args);
      }
      return cache[key];
    };
  }
  
  function expensiveCalculation(x) {
    console.log(`Calculating for ${x}...`);
    return x * 2;
  }
  
  const memoizedCalculation = memoize(expensiveCalculation);
  console.log(memoizedCalculation(5)); // Logs: "Calculating for 5..." and 10
  console.log(memoizedCalculation(5)); // Logs: 10 (result is cached)
  

// Task 8: Create a memoized version of a function that calculates the factorial of a number.
function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * factorial(n - 1);
  }
  
  const memoizedFactorial = memoize(factorial);
  console.log(memoizedFactorial(5)); // Logs: 120
  console.log(memoizedFactorial(5)); // Logs: 120 (result is cached)
  