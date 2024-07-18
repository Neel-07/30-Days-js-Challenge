//Task-1 : Create an array of numbers from 1 to 5 and log the array to the console.

const numbersArray = [1, 2, 3, 4, 5];
console.log(numbersArray,"\n"); // Logs: [1, 2, 3, 4, 5]


//Task-2 : Access the first and last elements of the array and log them to the console.

console.log(`First element: ${numbersArray[0]}`);
console.log(`Last element: ${numbersArray[4]}`,"\n");


// Task-3 : Use the `push` method to add a new number to the end of the array and log the updated array.

numbersArray.push(6);
console.log("The Updated array is",numbersArray,"\n"); // Logs: [1, 2, 3, 4, 5, 6]

//Task-4 : Use the `pop` method to remove the last element from the array and  log the updated array.

numbersArray.pop();
console.log(numbersArray,"\n"); // Logs: [1, 2, 3, 4, 5]

//Task-5 : Use the `shift` method to remove the first element from the array and  log the updated array.

numbersArray.shift();
console.log(numbersArray,"\n"); // Logs: [2, 3, 4, 5]

//Task-6 : Use the `unshift` method to add  a new number to the beginning of the  array and  log the updated array.

numbersArray.unshift(1);
console.log(numbersArray,"\n"); //Logs: [1, 2, 3, 4, 5]

//Task-7 : Use the `map` method to create a new array where each number is doubled and log the new array.

const doubledArray = numbersArray.map((num) => num * 2);
console.log(doubledArray,"\n"); // Logs: [2, 4, 6, 8, 10]

//Task-8 : Use the `filter` method to create a new array with only even numbers and log the new array.

const evenNumbersArray = numbersArray.filter((num) => num % 2 === 0);
console.log(evenNumbersArray,"\n"); // Logs: [2, 4]

//Task-9 : Use the `reduce` method to calculate the sum of all numbers in the array and log the result.

const sum = numbersArray.reduce((acc, curr) => acc + curr, 0);
console.log(`Sum of all numbers: ${sum}`,"\n"); // Logs: Sum of all numbers: 15

//Task-10 : Use a `for` loop to itereate over the array and log each element to the console.

const animals = ["Dog", "Cat", "Elephant", "Lion"];
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);

}
console.log("\n");

//Task-11 : Use the `forEach` method to iterate over the array and log each element to the console.

animals.forEach((animal) => {
    console.log(animal);
});

console.log("\n");
//Task-12 : Create a two-dimensional array (matrix) and log the entire array to the console.

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix);
console.log("\n");

//Task-13 : Access and log a specific element from the two-dimensional array.

console.log(matrix[1][2]); // Logs: 6





