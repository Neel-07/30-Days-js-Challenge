const { JSDOM } = require('jsdom');
const { LocalStorage } = require('node-localstorage');
const punycode = require('punycode/');

// Create a new instance of JSDOM
const { window } = new JSDOM('<!DOCTYPE html><html><body></body></html>');
const { document } = window;
global.window = window;
global.document = document;

// Initialize localStorage and sessionStorage
global.localStorage = new LocalStorage('./localStorage');
global.sessionStorage = new LocalStorage('./sessionStorage');

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('localStorageForm');
    const saveButton = document.getElementById('saveLocalStorageButton');
    const savedDataDiv = document.getElementById('localStorageData');

    // Function to display saved data
    function displaySavedData() {
        const name = localStorage.getItem('name');
        const email = localStorage.getItem('email');
        if (name && email) {
            savedDataDiv.innerHTML = `<p>Name: ${name}</p><p>Email: ${email}</p>`;
        }
    }

    // Display saved data on page load
    displaySavedData();

    // Save data to localStorage on button click
    saveButton.addEventListener('click', () => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        displaySavedData();
    });
});
