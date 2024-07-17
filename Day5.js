//Task-1 : Write a function to check if a number is  even or odd and log the result to the console.
let a = 10;
function check(){
    if(a%2 == 0){
        console.log(`${a} is an even number \n`);
    }
    else{
        console.log(`${a} is an odd number \n`);
    }
}

check();


//Task-2 : Write a function to calculate the square of a number and return the result.

function square(number){
    return number*number;
}
let ans = square(6);
console.log(ans,"\n");


//Task-3 : Write a function expression to find the maximum of two numbers and log the result to the console.

const max = function(a,b){
   if(a>b){
    return a;
   }
   else {
    return b;
   }
} 

console.log(max(5,3),"\n");


//Task-4 : Write a function expression to concatenate two strings and return the result.

const concat = function(a,b){
    let c = a + b;
    return c;
 } 
 
 console.log(concat("Day_05 ","Javascript"),"\n");

//Task-5 : Write and arrow function to calculate the sum of two numbers and return the result.
let add = (a,b)=>{
   return a + b;
}
console.log(add(7,8),"\n");

//Task-6 : Write an arrow function to check if a string constains specific character and return a boolean value.
let charcheck = (char) =>{
    const str ="Javascript";
    for(const element of str){
        if(char === element){
            return true;
        }
        
    }
    return false;
 }
 console.log(charcheck("i"),"\n"); //true 
 console.log(charcheck("z"),"\n");  //false

//Task-7 : Write a function that takes two parameters and return their product. Provide a default value for the second parameter.

let product = (a,b=8)=>{
    return a*b;
 }
 console.log(product(9,10),"\n");
 console.log(product(9),"\n");

//Task-8 : Write a function that takes a person's name and age and returns a greeting message.Provide a default value for the age.
let greet = function greetPerson(name, age = "unknown") {
    return `Hello, ${name}!${age !== "unknown" ? ` You are ${age} years old.` : ""}`;
}
console.log(greet("Aakash",54),"\n");

//Task-9 : Write a higher-order functions that takes a function and a number, and calls the function that many times.

function callFunctionNTimes(func, n) {
    for (let i = 0; i < n; i++) {
        func(); 
    }
}

function greet2() {
    console.log("Hello!");
}

callFunctionNTimes(greet2, 3,"\n"); // Calls greet() three times
console.log("\n");


//Task-10 : Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

function composeFunctions(func1, func2, value) {
    const result1 = func1(value);
    const finalResult = func2(result1);
    return finalResult;
}

function double(x) {
    return x * 2;
}

function addTen(x) {
    return x + 10;
}

const initialValue = 5;
const finalValue = composeFunctions(double, addTen, initialValue);
console.log(`Result: ${finalValue}`); // Result: 20 (5 * 2 + 10)
