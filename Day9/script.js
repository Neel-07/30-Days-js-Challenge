//Task-1 : Select and HTML element by its ID and change its text content.
 var h1 = document.querySelector("#title");// you can also use getElementById
 h1.textContent += " Day 09 of 30 Days of Js";

//Task-2 : Select an HTML element by its class and change its background color.
var cont = document.querySelector(".container"); //another way - getElementByClassName
cont.style.backgroundColor = "crimson";

//Task-3 : Create a new `div` element with some text content and append it to the body.
var div = document.createElement("div");
div.textContent = "Task 3 Appended div";
div.style.margin = "20px";
document.querySelector("body").appendChild(div);


//Task-4 : Create a new `li` element and add it to an existing `ul` list.
var li = document.createElement("li");
li.textContent = "Wednesday";
document.querySelector("ul").appendChild(li)

//Task-5 : Select an HTML element and remove it form the DOM.
var h2 = document.createElement("h2");
h2.textContent = "Hello there!";
document.querySelector("body").appendChild(h2);
document.querySelector("body").removeChild(h2);


//Task-6 : Remove the last child of a specific HTML element.

//using the li appended in task 4
document.querySelector("ul").removeChild(li);

//Task-7 : Select an HTML element and change one of its attributes (e.g., `src` of an `img` tag).
var img = document.querySelector("img");
img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRexU-pPK6ARnAs5kKLnbtu00V0vg9eLzGlFQ4NM8N54U9V5a0mv4f7vV5MYBo9oyFskB4&usqp=CAU"

//Task-8 : Add and remove a CSS class to/from an HTML element.
img.classList.add("space");
img.classList.remove("border-rad")


//Task-9 : Add a click event listenter to a button that changes the text content of a paragraph.
var para = document.querySelector("p");
var btn = document.querySelector("button");
btn.addEventListener("click",function(){
   para.textContent = "One moonless night, Quillip stumbled upon a hidden portal—a shimmering rift between realms. Curiosity tugged at his stardust heart, and without hesitation, he stepped through. On the other side";

});

//Task-10 : Add a mouseover event listener to an element that changes its border color.

// using cont created in task2
cont.addEventListener("mouseover",function(){
    cont.style.border=" 5px solid blue";
});


