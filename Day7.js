//Task-1 : Create an object reepresenting a book with properties like title, author, and year, and  log the object to the console.

let book = {
 title : "The Girl on the train",
 author : "Ruskin Bond",
 year : 2022
};

console.log(book,"\n");



//Task-2 : Access and log the title and author properties of the book object.
console.log(book.title);
console.log(book.author,"\n");



//Task-3 : Add a method to the book object that return a string with the books title and author, and log the result of calling this method.
book.getInfo = function() {
    return `${book.title} by ${book.author} (${book.year})`;
};
console.log(book.getInfo(),"\n"); 




//Task-4 : Add a method to the book object that takes parameter (year)and updates the book's year property, then log the updated object.
book.updateYear = function(newYear) {
    this.year = newYear;
}

book.updateYear(2023);
console.log(book.year); // 2023
console.log(book,"\n");



//Task-5 : Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
const myLibrary = {
    name: "Whimsical Book Haven",
    books: [
        {
            title: "The Girl on the Train",
            author: "Ruskin Bond",
            year: 2022
        },
        {
            title: "The Hitchhiker's Guide to the Galaxy",
            author: "Douglas Adams",
            year: 1979
        },
        {
            title: "Pride and Prejudice",
            author: "Jane Austen",
            year: 1813
        }
    
    ]
};

console.log(myLibrary,"\n");



//Task-6 : Access and log the name of the library and titles of all the books in the library.


// Accessing and logging the library name
console.log(`Welcome to ${myLibrary.name}`);

// Logging titles of all the books
myLibrary.books.forEach((book, index) => {
    console.log(`${index +1}. ${book.title} by ${book.author}`,"\n");
});



//Task-7 : Add a method to the book object that uses the `this` keyword to return a string with the book's title and year, and log the result of calling this method.
book.getAttri = function() {
    return `${this.title} (${this.year})`;
};
console.log(book.getAttri(),"\n");




//Task-8 : Use a for...in loop to iterate over the properties of the book object and log each property and its value. 

for (const bookIndex in myLibrary.books) {
    const book = myLibrary.books[bookIndex];
    console.log(`Book ${parseInt(bookIndex) + 1}:`);
    for (const prop in book) {
        console.log(`  ${prop}: ${book[prop]}`);
    }
}
console.log("\n");




//Task-9 : Use Object.keys and Object.values methods to log all the keys and values of the book object.
const allKeys = Object.keys(myLibrary.books[0]);
const allValues = Object.values(myLibrary.books[0]);
console.log("All keys:", allKeys);
console.log("All values:", allValues);