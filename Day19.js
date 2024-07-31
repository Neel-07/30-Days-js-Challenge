// Task-1 : Write a regular expression to match a simple pattern (e.g., match all occurences of hte word 'Javascript' in a string). Log the matches.
const inputString = "JavaScript is fun. javascript is cool. JAVAscript rocks!";
const matches = inputString.match(/Javascript/gi);
console.log("Matches for 'Javascript':", matches);


// Task-2 : Write a regular expression to match all digits in a string. Log the matches.
const inputDigits = "123 abc 456 789";
const digitMatches = inputDigits.match(/\d+/g);
console.log("Digit matches:", digitMatches);

// Task-3 : Write a regular expression to match all words in a string that start with a capital letter. Log the matches.
const inputText = "Hello World! JavaScript is Awesome.";
const capitalWordMatches = inputText.match(/\b[A-Z][a-zA-Z]*\b/g);
console.log("Capitalized words:", capitalWordMatches);


// Task-4 : Write a regular expression to match all sequences of one or more digits in a string. Log the matches.
const inputDigits1 = "123 abc 456 789";
const digitMatches1 = inputDigits.match(/\d+/g);
console.log("Digit matches:", digitMatches);


// Task-5 : Write a regular expression to capture the area code, centera office code, and line number from a US phone number format (e.g., (123) 456-7890). Log the captures.
const phoneNumber = "(123) 456-7890";
const phoneComponents = phoneNumber.match(/\((\d{3})\) (\d{3})-(\d{4})/);
console.log("Area code:", phoneComponents[1]);
console.log("Central office code:", phoneComponents[2]);
console.log("Line number:", phoneComponents[3]);


// Task-6 : Write a regular expression to capture  the username and domain form an email address. Log the caputures.
const emailAddress = "john.doe@example.com";
const emailRegex = /^(\w+)@([a-zA-Z0-9.-]+)\.[a-zA-Z]{2,}$/;
const emailComponents = emailAddress.match(emailRegex);

if (emailComponents) {
    console.log("Username:", emailComponents[1]);
    console.log("Domain:", emailComponents[2]);
} else {
    console.log("Invalid email address format.");
}



// Task-7 : Write a regulare expression to match a word only if it is at the beginning of a string. Log the matches.
const inputStartsWithWord = "Hello, world!";
const startWordMatch = inputStartsWithWord.match(/^\w+/);
console.log("Word at the beginning:", startWordMatch);


// Task-8 : Write a regular expression to match  a word only if it is ate the end of a string. Log the matches.
const inputEndsWithWord = "Goodbye, everyone!";
const endWordMatch = inputEndsWithWord.match(/\w+$/);
console.log("Word at the end:", endWordMatch);


// Task-9 : Write a regulare expression to validate a simple password (must include at least one uppercase letter, one lowercase letter, one digit, and one special character). Log whether the password is valid. 
const password = "P@ssw0rd";
const isValidPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

if (isValidPassword) {
    console.log("Password is valid!");
} else {
    console.log("Password does not meet the criteria.");
}


// Task-10 : Write a regular expression to validate a URL. Log whether the URL is valid.

const url = "https://www.example.com/path/to/page";
const isValidURL = /^(https?:\/\/)?([a-zA-Z0-9.-]+)\.[a-zA-Z]{2,}([\/\w .-]*)*\/?$/.test(url);

if (isValidURL) {
    console.log("URL is valid!");
} else {
    console.log("URL is not valid.");
}

