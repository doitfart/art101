// index.js - Lab 7: Functions - Practice writing functions that take user input and practice manipulating strings in JavaScript.
// Author: Duncan Moran
// Date: May 2, 2023

// input
// sortUserName - function that takes user input and sorts the letters of their name
function sortUserName() {
    // window prompt for input of name (string)
    var userName = window.prompt("hey!! its me, ur computer. give me your name so I can sort it ? thanks <3");
    console.log("userName =", userName);
    // split string(userName) into array
    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);
    // sort nameArray
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);
    // join array, now sorted, back into string 
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted)
    // wes says the above lines of code could be simplified to a single line, which is a little confusing to me right now,
    // but im going to include it here for future reference when im more comfortable chaining together methods like this:
    //  userName.toLowerCase().split("").sort().join("")

    //finally, return the nameSorted to the user
    return nameSorted;
}

//output, just takes whatever the function spits out and places it below the writeln text
document.writeln("hiii, its your computer again :) so here's your name, its fixed now: </br>",
    sortUserName(), "</br>");