// index.js - Lab 10: JavaScript Events & Forms - experiment with JS events and forms.
// Author: Duncan Moran
// Date: May 14, 2023

//function sorts name string by splitting it to an array, sorting the array, then joining the array back into a string.
function sortName(str){
    return str.split('').sort().join('');
}

//find the element
var myButton = document.getElementById("my-button");

//create an event handler within the JS file that listens for a click of the button
myButton.addEventListener("click", function(){
        console.log("button pressed");
        //retrieves value of name input
        var userName = document.getElementById("user-name").value;
        //takes value and sorts it via sortName function above
        var nameStr = sortName(userName);
        //takes output in html and assigns it to a variable
        var userNameSorted = document.getElementById("output");
        //takes that variable and replaces inner HTML of output div with the sorted name string
        userNameSorted.innerHTML = nameStr;
})