//Task- 1 : Write a  function that intentionally throws an error and use try-catch block to handle the error and log an appropriate message to the console.
function throwErrorFunction() {
    throw new Error("This is an intentional error!");
  }
  
  try {
    throwErrorFunction();
  } catch (error) {
    console.error("Caught an error:", error.message);
  }
  

//Task-2 : Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.
function divideNumbers(numerator, denominator) {
    if (denominator === 0) {
      throw new Error("Cannot divide by zero!");
    }
    return numerator / denominator;
  }
  
  try {
    const result = divideNumbers(10, 0); // Example usage
    console.log("Result:", result);
  } catch (error) {
    console.error("Error:", error.message);
  }
  

//Task-3 : Write a script that includes try-catch block and a finally block. Log messages in the try, catch and finally blocks to observer the execution flow.
try {
    console.log("Inside try block");
    throw new Error("An error occurred!");
  } catch (error) {
    console.error("Caught an error:", error.message);
  } finally {
    console.log("Finally block executed");
  }
  

//Task-4 : Create a custom error class that extends the built-in Error Class. Throw an instance of this custom error in a function and handle it using try-catch block.
class CustomError extends Error {
    constructor(message) {
      super(message);
      this.name = "CustomError";
    }
  }
  
  function throwCustomError() {
    throw new CustomError("This is a custom error!");
  }
  
  try {
    throwCustomError();
  } catch (error) {
    console.error("Caught custom error:", error.message);
  }
  

//Task-5 : Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using at try-catch block.
function validateInput(input) {
    if (!input || input.trim() === "") {
      throw new CustomError("Input cannot be empty!");
    }
    console.log("Input is valid:", input);
  }
  
  try {
    validateInput(""); // Example usage
  } catch (error) {
    console.error("Validation error:", error.message);
  }
  

//Task-6 : Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log and appropriate message to the console.
const randomPromise = new Promise((resolve, reject) => {
    const randomValue = Math.random();
    if (randomValue < 0.5) {
      resolve("Random success!");
    } else {
      reject(new Error("Random failure!"));
    }
  });
  
  randomPromise.catch((error) => {
    console.error("Promise rejected:", error.message);
  });
  

//Task-7 : Use try-catch within an async function to handle errors from promise that randomly resolves or rejects, and log the error message.
async function handleRandomPromise() {
    try {
      const result = await randomPromise;
      console.log("Promise resolved:", result);
    } catch (error) {
      console.error("Promise rejected:", error.message);
    }
  }
  handleRandomPromise();
  

//Task-8 : Use the `fetch` API to request data form an invalid URL  and handle the error using .catch(). Log and appropriate error message to the console.
fetch("https://invalid-url.example.com")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Network response was not OK (status ${response.status})`);
    }
    return response.json();
  })
  .catch((error) => {
    console.error("Error fetching data:", error.message);
  });


//Task-9 : Use the `fetch` API  to request data from an invalid URL within an async function and handle the error using try-catch. Log and appropriate error message.
async function fetchDataFromInvalidURL() {
    try {
      const response = await fetch("https://invalid-url.example.com");
      if (!response.ok) {
        throw new Error(`Network response was not OK (status ${response.status})`);
      }
      const data = await response.json();
      console.log("API response data:", data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  }
  
  fetchDataFromInvalidURL();
  