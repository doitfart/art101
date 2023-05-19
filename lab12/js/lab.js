// index.js - Lab 12: Conditionals - create a function that depends on conditionals
// Author: Duncan Moran
// Date: May 18, 2023

function sortingHat(str) {
    //count the letters in str, assigns to variable "length"
    var len = str.length;
    //get the remainder with 4
    var mod = len % 4;
    if (mod == 0) {
        return "GryffinBORE";
    }
    else if (mod == 1) {
        return "RavenBLAH";
    }
    else if (mod == 2) {
        return "HuffleSCUFFED";
    }
    else if (mod == 3) {
        return "SlytherWIN";
    }
}

//click listener attached to the button that assigns user to a house based on # of letters in name
var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
    console.log("button clicked");
    //get input
    var name = document.getElementById("input").value;
    var house = sortingHat(name);
    newText = "<p>The sorting hat has assigned you to " + house + " house</p>";
    document.getElementById("output").innerHTML = newText
})