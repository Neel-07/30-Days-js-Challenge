const { JSDOM } = require('jsdom');
const { LocalStorage } = require('node-localstorage');
const punycode = require('punycode/');

// Create a new instance of JSDOM
const { window } = new JSDOM('<!DOCTYPE html><html><body><form id="sessionStorageForm"><input id="name" type="text"><input id="email" type="email"><button id="saveSessionStorageButton" type="button">Save</button></form><div id="sessionStorageData"></div></body></html>');
const { document } = window;
global.window = window;
global.document = document;

// Initialize localStorage and sessionStorage
global.localStorage = new LocalStorage('./localStorage');
global.sessionStorage = new LocalStorage('./sessionStorage');

// Access elements directly
const form = document.getElementById('sessionStorageForm');
const saveButton = document.getElementById('saveSessionStorageButton');
const savedDataDiv = document.getElementById('sessionStorageData');

// Function to display saved data
function displaySavedData() {
    const name = sessionStorage.getItem('name');
    const email = sessionStorage.getItem('email');
    if (name && email) {
        savedDataDiv.innerHTML = `<p>Name: ${name}</p><p>Email: ${email}</p>`;
    }
}

// Display saved data on page load
displaySavedData();

// Save data to sessionStorage on button click
saveButton.addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    sessionStorage.setItem('name', name);
    sessionStorage.setItem('email', email);
    displaySavedData();
});
