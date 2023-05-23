// index.js - Lab 13 - experiment with loops in JavaScript
// Author: Duncan Moran
// Date: May 23, 2023

//start sorting when button is pressed
$("#button").click(function() {
    console.log("STARTED");
    var str;
    //loop from start to end
    for (var i=1; i<200; i++) {
        str = "";
        //if a multiple of 3, print "Fuzz"
        if (i % 3 == 0) {
            str += "Fizz";
        }
        //if a multiple of 5, print "Buzz"
        if (i % 5 == 0) {
            str += "Buzz";
        }
        //if a multiple of 7, print "Boom"
        if (i % 7 == 0) {
            str += "Boom";
        }
        //if the string is still empty (not a multiple of 3,5,7, or a combo of any of those), set str to number
        if (str == "") {
            str = i;
    }
    $("#output").append("<div>" + str + "!")
}

})
