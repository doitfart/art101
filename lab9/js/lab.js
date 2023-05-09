// index.js - Lab 9: JavaScript for the Web - experiment with DOM manipulation in JavaScript
// Author: Duncan Moran
// Date: May 9, 2023

//assign output to a variable
var outputEl = document.getElementById("output");

//create new element & assign to a variable
var new1El = document.createElement("p");

//change the html attribute of variable to say something new
new1El.innerHTML = "Something new";

//create another new element & assign to a variable
var new2El = document.createElement("p");

//change the html attribute of variable to say something else
new2El.innerHTML = "Something else";

//append both elements one at a time to output
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

//change the css attributes of two elements of page
document.getElementById("problems").style.backgroundColor = "pink";
document.getElementById("p1").style.fontStyle = "italic";
document.getElementById("p1").style.letterSpacing = "1.5px";