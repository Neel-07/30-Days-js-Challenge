// Task-1 : Add a click event listerner to a button that changes the text content of a paragraph.
var p = document.querySelector("p")
var btn = document.querySelector("button");
var isToggle = false;
btn.addEventListener("click",function(){
   
   if(isToggle){
    p.textContent="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt sunt quibusdam dignissimos, voluptate pariatur alias dolorem. Est, ratione dolorem? Amet beatae dolores iure quisquam!"
   }
   else{
   p.textContent="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat rem quos ullam ipsam. Eos odio dolores maiores rem ipsum?"
   }
   isToggle = !isToggle;
   
}); 


// Task-2 : Add a double-click event listener to an image that toggles its visibility.
var img = document.querySelector("img");
img.addEventListener("dblclick",function(){
    img.classList.toggle("hidden");
});

// Task-3 : Add a mouseover event listener to an element that changes its background color.
var tsk3 = document.querySelector("#task3");
tsk3.addEventListener("mouseover", function() {
    tsk3.style.backgroundColor = "aqua";
})
// Task-4 : Add a mouseout event listener to an element that resets its background color.
tsk3.addEventListener("mouseout",function(){
    tsk3.style.backgroundColor = "blanchedalmond";
});

// Task-5 : Add a keydown event listener to an input field that logs the key pressed to the console.
var keydownInput = document.getElementById("keydownInput");
keydownInput.addEventListener("keydown", function(event) {
        console.log("Key pressed:", event.key);
    });


// Task-6 : Add a keyup event listener to an input field that displays the current value in a paragraph.
var keyupInput = document.getElementById("keyupInput");
var keyupOutput = document.getElementById("keyupOutput");
keyupInput.addEventListener("keyup", function() {
        keyupOutput.textContent = "Current value: " + keyupInput.value;
    });

// Task-7 : Add a submit event listener to a form that prevents the default submission and logs the form data to the console.

var form = document.getElementById("myForm");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    var formData = new FormData(form);
    var data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });
    console.log("Form data:", data);
});

// Task-8 : Add a change event listener to a select dropdown that displays the selected value in a paragraph.
var select = document.getElementById("mySelect");
var selectOutput = document.getElementById("selectOutput");
select.addEventListener("change", function() {
    selectOutput.textContent = "Selected value: " + select.value;
});

// Task-9 : Add a click event listener to a list that logs the text content of the clicked list item using event delegation.
var list = document.getElementById("myList");
list.addEventListener("click", function(event) {
    if (event.target && event.target.nodeName === "LI") {
        console.log("List item clicked:", event.target.textContent);
    }
});

// Task-10 : Add an event listener to a parent element that listens for events from dynamically added child elements.

var parentElement = document.getElementById("parentElement");
parentElement.addEventListener("click", function(event) {
    if (event.target && event.target.classList.contains("dynamicButton")) {
        console.log("Dynamic button clicked:", event.target.textContent);
    }
});

// Example of dynamically adding a button to demonstrate task 10
var newButton = document.createElement("button");
newButton.className = "dynamicButton";
newButton.textContent = "Dynamic Button 3";
parentElement.appendChild(newButton);