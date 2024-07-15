// Task-1 : Write a program to check if a number is positive,negative, or zero, and log the result to the console.
const a = 10;
if(a>0){
    console.log("It is a Positive Number");
}
else if(a<0){
    console.log("It is Negative Number");
}
else{
    console.log("The Number is Zero")
}


// Task-2 : Write a program to check if a person is eligible to vote (age >= 18), and log the result to the console.
let age = 18;
if(age>=18){
    console.log("The person is eligible to cast vote");
}
else if(age<18){
    console.log("The person is not eligible to cast vote");
}

//Task-3 : Write a program to find the largest of three numbers using nested if-else statements.

let b = 12, c = 4, d = 19;
if (b > c) {
    if (b > d) {
        console.log("The largest number is b:", b);
    } else {
        console.log("The largest number is d:", d);
    }
} else {
    if (c > d) {
        console.log("The largest number is c:", c);
    } else {
        console.log("The largest number is d:", d);
    }
}


//Task-4 : Write a program that uses a switch case to determine the day fo the week based on a number (1-7) and log the day name to the console.

const dayNumber = 3; // Example: 1 for Monday, 2 for Tuesday, etc.

switch (dayNumber) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thrusday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day number");
}


//Task-5 : Write a program that uses a switch case to assign a grade ('A','B','C','D','F') based on a score and log the grade to the console.

const score = 85; // Example: 85 out of 100

let grade;
switch (true) {
    case score >= 90:
        grade = 'A';
        break;
    case score >= 80:
        grade = 'B';
        break;
    case score >= 70:
        grade = 'C';
        break;
    case score >= 60:
        grade = 'D';
        break;
    default:
        grade = 'F';
}

console.log("Grade:", grade);


//Task-6 : Write a program that Use the ternary operator to check if a number is even or odd and log the result to the console.

const number = 17; // Example: 17

const result = number % 2 === 0 ? "Even" : "Odd";
console.log("Result:", result);


//Task-7 : Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

const year = 2024; // Example: 2024

const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
console.log("Is leap year?", isLeapYear);
