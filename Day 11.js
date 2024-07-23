//Task-1 : Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
const mysticalPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Greetings, seeker of wisdom! The veil of time has lifted.");
    }, 2000); // 2000 milliseconds (2 seconds)
  });
  
  mysticalPromise.then((message) => {
    console.log(message);
  });

//Task-2 : Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch().
const ominousPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("The ancient prophecy remains hidden."));
    }, 2000);
  });
  
  ominousPromise.catch((error) => {
    console.error("Error:", error.message);
  });

//Task-3 : Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.
const fetchDataPromise = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Data retrieved from the mystical server.");
      }, 1000);
    });
  };
  
  fetchDataPromise()
    .then((data) => {
      console.log("Step 1:", data);
      return fetchDataPromise();
    })
    .then((data) => {
      console.log("Step 2:", data);
      return fetchDataPromise();
    })
    .then((data) => {
      console.log("Step 3:", data);
    });
  

//Task-4 : Write an async function that waits for a promise to resolve and then logs the resolved value.
async function fetchAndLog() {
    const result = await mysticalPromise;
    console.log("Resolved value:", result);
  }
  fetchAndLog();
  

//Task-5 : Write an async function that handles a rejected promise using try-catch and logs the error message.
async function handleErrors() {
    try {
      await ominousPromise; // Replace with your actual rejected promise
    } catch (error) {
      console.error("Error occurred:", error.message);
    }
  }
  handleErrors();
  

//Task-6 : Use the fetch API to get data from a public API and log the response data to the console using Promises.
async function fetchDataFromAPI() {
    try {
      const response = await fetch("https://api.example.com/data");
      if (!response.ok) {
        throw new Error(`Network response was not OK (status ${response.status})`);
      }
      const data = await response.json();
      console.log("API response data:", data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  }
  
  fetchDataFromAPI();
  

  
// Task-7 : Use the fetch API to get data from a public API and log the response data to the console using async/await.
async function fetchDataFromAPI() {
    try {
      const response = await fetch("https://api.example.com/data");
      const data = await response.json();
      console.log("API response data:", data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  fetchDataFromAPI();

//Task-8 : Use `Promise.all` to wait for multiple promises to resolve and then log all their values.
const promise1 = fetch("https://api.example.com/data1");
const promise2 = fetch("https://api.example.com/data2");

Promise.all([promise1, promise2])
  .then(([response1, response2]) => {
    console.log("Response 1:", response1);
    console.log("Response 2:", response2);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });


//Task-9 : Use `Promise.race` to log the value of the first promise that resolves among multiple promises.
const fastPromise = new Promise((resolve) => setTimeout(() => resolve("Fast!"), 1000));
const slowPromise = new Promise((resolve) => setTimeout(() => resolve("Slow!"), 3000));

Promise.race([fastPromise, slowPromise])
  .then((result) => {
    console.log("First resolved promise:", result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });



