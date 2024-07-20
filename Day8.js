//Task-1 : Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.

const personName = "Alex";
const personAge = 30;

const greeting = `Hello, ${personName}! You're ${personAge} years old.`;
console.log(greeting);

console.log("\n");

//Task-2 : Create a multi-line string using template literals and log it to the console.

const multiLineText = `This is a multi-line string.
It spans across several lines.
Isn't it convenient?
`;
console.log(multiLineText);

console.log("\n");

//Task-3 : Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
const numbers = [10, 20, 30, 40, 50];

const [firstNumber, secondNumber] = numbers;

console.log("First number:", firstNumber);
console.log("Second number:", secondNumber);
 
console.log("\n");


//Task-4 : Use object destructuring to extract the title and author from a book object and log them to the console.

const myBook = {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    year: 1979
};

const { title, author } = myBook;

console.log("Title:", title);
console.log("Author:", author);

console.log("\n");


//Task-5 : Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.

const existingFruits = ["apple", "banana", "cherry"];
const exoticFruits = ["mango", "pineapple", "dragon fruit"];

const allFruits = [...existingFruits, ...exoticFruits];

console.log("All fruits:", allFruits);

console.log("\n");


//Task-6 : Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.

function sum(...numbers) {
    return numbers.reduce((total, current) => total + current, 0);
}

// Example usage:
const result1 = sum(1, 2, 3); // 6
const result2 = sum(10, 20, 30, 40); // 100

console.log("Result 1:", result1);
console.log("Result 2:", result2);

console.log("\n");


//Task-7 : Write a function that takes two parameters and return their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second pareameter.

function multiply(a, b = 1) {
    return a * b;
}

// Example usage:
const result3 = multiply(5); // Using the default value (5 * 1)
const result4 = multiply(3, 4); // Explicitly passing both values (3 * 4)

console.log("Result 1:", result3); // Result 1: 5
console.log("Result 2:", result4); // Result 2: 12

console.log("\n");


//Task-8 : Use enhanced object literals to create an object with methods and properties, and log the object to the console.
const myBookstore = {
    name: "Enchanted Reads",
    location: "Cosmic Avenue",
    isOpen: true,
    books: ["The Secret Garden", "Alice in Wonderland", "The Hobbit"],
    greetVisitor() {
        console.log(`Welcome to ${this.name}! Explore our magical collection.`);
    },
    listBooks() {
        console.log("Available books:");
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. ${book}`);
        });
    }
};

// Log the cosmic bookstore
console.log(myBookstore);

// Greet a visitor
myBookstore.greetVisitor();

// List the available books
myBookstore.listBooks();

console.log("\n");


//Task-9 : Create an object with computed property names based variables and log the object to the console.
// Variables
const spell = "Abracadabra";
const potion = "Elixir of Wisdom";
const wand = "Phoenix Feather";

// Create an enchanted object
const mysticalArtifacts = {
    [spell]: "Unleashes hidden powers",
    [potion]: "Grants ancient knowledge",
    [wand]: "Channels cosmic energy"
};

// Reveal the mystical artifacts
console.log(mysticalArtifacts);

