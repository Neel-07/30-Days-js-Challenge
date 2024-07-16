//Task-1 : Write a program to print numbers from 1 to 10 using a for loop.
for(let i = 1; i<=10; i++){
  console.log(i);
}
console.log("\n");



//Task-2 : Write a program to print the multiplication table of 5 using a for loop.
for(let i = 1; i<=10; i++){
  console.log(`5 X ${i} = ${5*i}`);
}
console.log("\n");



//Task-3 : Write a program to calculate the sum of numbers form 1 to 10 using a while loop.
let sum = 0,n=1;
while(n<=10){
  sum += n;
  n++;
}
console.log(`The sum of the numbers from 1 to 10 is ${sum}\n`);



//Task-4 : Write a program to print numbers from 10 to 1 usind a while loop.
let i = 10;
while(i>0){
  console.log(i);
  i--;
}
console.log("\n");


//Task-5 : Write a program to print numbers from 1 to 5 using do...while loop.
let m=1;
do{
  console.log(m);
  m++;
}
while(m<6);
console.log("\n");


//Task-6 : Write a program to calculate the factorial of a number using a do...while loop.
let num = 5,fact=1;
do{
   fact *= num;
   num--;
}
while(num>0);
console.log(fact);
console.log("\n");


/* Task-7 : Write a program to print pattern usind nested for loops:
  *
  **
  ***
  **** 
  ***** */

for(let i = 1; i<=5; i++){
  let pattern = ''
  for(let j =1; j<=i; j++){
     pattern += '*';
  }
  console.log(pattern);
} 
console.log("\n"); 

// Task-8 : Write a program to print numbers form 1 to 10, but skip the number 5 using the 'continue' statement.

for(let i = 1; i<=10; i++){
  if(i==5){
    continue;
  }
  console.log(i);
}
console.log("\n");

//Task-9 : Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.

for(let i = 1; i<=10; i++){
  if(i==7){
    break;
  }
  console.log(i);

}
console.log("\n");
