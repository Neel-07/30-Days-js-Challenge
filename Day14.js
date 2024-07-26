// Task 1: Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message.
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

const person = new Person("Alice", 30);
console.log(person.greet());

// Task 2: Add a method to the Person class that updates the age property and logs the updated age.
// Inside the Person class definition
Person.prototype.updateAge = function (newAge) {
    this.age = newAge;
    console.log(`Updated age: ${this.age}`);
};

const person1 = new Person('Eva', 30);
person.updateAge(35); // Call the added method
console.log(person);


// Task 3: Define a class Student that extends the Person class. Add a property studentId and a method to return the student ID. Create an instance of the Student class and log the student ID.
class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
    }

    getStudentId() {
        return this.studentId;
    }
}

const student = new Student('Bob', 20, 12345);
console.log(`Student ID: ${student.getStudentId()}`);


// Task 4: Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message.
class Student1 extends Person {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
    }

    greet() {
        return `Hello, I'm a student with ID ${this.studentId}.`;
    }
}

const student1 = new Student1('Bob', 20, 12345);
console.log(student.greet());


// Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.
class Person1 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    static genericGreet() {
        return 'Hello from a generic person!';
    }
}

console.log(Person1.genericGreet()); // Call the static method



// Task 6: Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.
class Student2 extends Person {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
        Student2.totalStudents++;
    }
}

Student2.totalStudents = 0; // Initialize the static property

// Increment the static property
const student2 = new Student2('Alice', 22, 1001);
const student3 = new Student2('Bob', 21, 1002);
console.log(`Total students: ${Student2.totalStudents}`);



// Task 7: Add a getter method to the Person class to return the full name (assume a firstName and lastName property). Create an instance and log the full name using the getter.
class Person3{
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // Getter method for full name
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const person3 = new Person3('John', 'Doe');
console.log(`Full name: ${person3.getFullName()}`);
  


// Task 8: Add a setter method to the Person class to update the name properties (firstName and lastName ). Update the name using the setter and log the updated full name.
class Person4 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // Setter method for full name
    setFullName(newFullName) {
        const [newFirst, newLast] = newFullName.split(' ');
        this.firstName = newFirst;
        this.lastName = newLast;
    }
}

const person4 = new Person4('John', 'Doe');
person4.setFullName('Alice Smith'); // Call the setter method
console.log(`Updated full name: ${person3.getFullName()}`);



// Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.

class Account {
    #balance; // Private field

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        this.#balance += amount;
    }

    withdraw(amount) {
        if (amount <= this.#balance) {
            this.#balance -= amount;
        } else {
            console.log('Insufficient balance.');
        }
    }

    getBalance() {
        return this.#balance;
    }
}

// Task 10: Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation.
const myAccount = new Account(1000.0);
myAccount.deposit(500.0);
console.log(`Balance after deposit: ${myAccount.getBalance()}`);
myAccount.withdraw(200.0);
console.log(`Balance after withdrawal: ${myAccount.getBalance()}`);

