// index.js - Lab 6: Arrays and Objects - Further practice JavaScript by experimenting with arrays and objects.
// Author: Duncan Moran
// Date: April 27, 2023

// Define Variables
var myTransport = ["walk", "bus", "lyft", "carpool", "drive"];

// Create an object for my main ride
var myMainRide = {
  make: "Honda",
  model: "Civic", 
  color: "Brown",
  year: 2015,
  age: function() {
    return 2023 - this.year;
  }
}

// Output
document.writeln("Ways I get around in Santa Cruz: ", myTransport, "<br>");

document.writeln("My Ride back in Oakland: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");