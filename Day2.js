
// Task-1 : Write a program to add two numbers and log the result to the console.

let num_1 = 12;
let num_2 = 45;
console.log(`The Addition of ${num_1} and ${num_2} gives `,num_1+num_2);


// Task-2 : Write a program to subtract two numbers and log the result to the console.

let num_3 = 92;
let num_4 = 45;
console.log(`The substraction of ${num_3} and ${num_4} gives `,num_3-num_4);


// Task-3 : Write a program to multiply two numbers and log the result to the console.
 
let num_5 = 8;
let num_6 = 5;
console.log(`The mulitplication of ${num_5} and ${num_6} gives `,num_5*num_6);


// Task-4 : Write a program to divide two numbers and log the result to the console.

let num_7 = 56;
let num_8 = 28;
console.log(`The Division  of ${num_7} and ${num_8} gives `,num_7/num_8);


// Task-5 : Write a program to find the remainder when one divided by another and log the result to the console.

let num_9 = 67;
let num_10 = 19;
console.log(`The Remainder when  ${num_9} is divided by  ${num_10} is  `,num_9%num_10);


// Task-6 : Use the '+=' operator to add a number to the variable and log the result to the console.

let op = 43;
op +=7
console.log("The increased value of op is ",op);

// Task-7 : Use the '-=' operator to add a number to the variable and log the result to the console.

let op_2 = 50;
op_2 -=7
console.log("The decreased value of op_2 is ",op_2);

// Task-8 : Write a program to compare two numbers using '>' and '<' and log the result to console.
 
let a = 4, b = 8;
console.log(`${a} > ${b} is `, a > b); // Output: false 
console.log(`${a} < ${b} is `, a < b); // Output: true


// Task-9 : Write a program to compare two numbers using '>=' and '<=' and log the result to console.

let c = 7, d = 7;
console.log(`${c} >= ${d} is `, c >= d); // Output: true
console.log(`${c} <= ${d} is `, c <= d); // Output: true


// Task-10 : Write a program to compare two numbers using '==' and '===' and log the result to console.
 
let e = 7, f = "7";
console.log(`${e} == ${f} is `, e == f); // Output: true
console.log(`${e} === ${f} is `, e === f); // Output: false  
// (=== is strict equality operator)


//Task-11 : Write a program that used the '&&' operator to combine two conditions and log the result to the console.

let ad_1= 4, ad_2 = 8;

const bothTrue =  (a > 2) && (b < 10); // Both conditions are true

console.log('both the conditions are :', bothTrue); 


//Task-12 : Write a program that used the '||' operator to combine two conditions and log the result to the console.

let or_1 = 4, or_2 = 8;

const OneTrue = (a < 2) || (b > 5); // At least one condition is true

console.log('at least one of the  conditions is :', OneTrue); 


//Task-13 : Write a program that used the '!' operator to negate a  condition and log the result to the console.

let neg_1 = 4, neg_2 = 8;

const condition = a > b;
const negatedCondition = !condition;

console.log('condition:', condition);  
console.log('negated condition:', negatedCondition); 



//Task-14 : Write a program that used the ternary operator to check if a number is positive or negative and log the result to the console.

const ter = 3;
const check = ter>0 ? "The number is positve" : "The number is negative";
console.log(check);
