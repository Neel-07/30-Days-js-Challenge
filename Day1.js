//Task_1 - Declare a variable using 'var', assign it a number and log the value to the console.

var num = 12;
console.log(num);

//Task_2 - Declare a variable using 'let', assign it a string and log the value to the console.

let firstName = "Neel";
console.log(firstName);


//Task_3 - Declare a variable using 'let', assign it a boolean value and log the value to the console.

const bool = true;
//bool_value = 0(false) or 1(true);
console.log(bool);


//Task_4 - Create variables of different data types(number, string, boolean , object, array) and log each variable's type using the typeof

let num_1 = 420;
console.log(`The type of ${num} is`, typeof(num_1)); //number

let string = "Neel";
console.log(`The type of ${string} is`, typeof(string));  //string

let bool_1 = false;
console.log(`The type of ${bool_1} is`, typeof(bool_1));  //boolean

let obj = {
    name: "Neel",
    Day: 1,
    Language: "Javascript"
};
console.log(`The type of ${JSON.stringify(obj)} is`, typeof(obj)); //object

let arr = [1,2,"3",function(){}];  //In js array can store different datatypes.
console.log(`The type of ${arr} is`, typeof(arr)); //object


//Task_5 - Declare a variable using 'let', assign it an initial value, reassign a new value and log both the values to console.

let val = 32;
console.log("The value of val is ",val);
val=45;
console.log("The reassigned value of val is ",val);


//Task_6 - Try reassigning a variable declared with 'const' and observe the error

const val_1 = 98;
console.log("The value of val_1 is",val_1);
val_1 = 100; // This will throw a TypeError: Assignment to constant variable.
console.log("The value of val_1 is",val_1);
