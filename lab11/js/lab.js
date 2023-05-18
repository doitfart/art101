// index.js - Lab 11: Libraries & jQuery - experiment with features of jQuery
// Author: Duncan Moran
// Date: May 16, 2023

//add a button for each section (challenge, problems, and results)
$("#challenge").append("<button id='challenge-button'>click?</button>");
$("#problems").append("<button id='problems-button'>Click???</button>");
$("#results").append("<button id='results-button'>CLICK?!?!</button>");

//add a click event to each button for each section. challenge:
$("#challenge-button").click(function(){
    //wes' site also says a better/alternative anon function for here could be,
    //which selectes "this" button. you can use this command when like 3 buttons have the sam class to select
    //one specific button thats within the class.
    // $(this).parent().toggleClass("special"); which traverses the DOM to the parent. 
    $("#challenge").toggleClass("special");
})

//for problems section:
$("#problems-button").click(function(){
    $("#problems").toggleClass("special");
})

//and finally for results section:
$("#results-button").click(function(){
    $("#results").toggleClass("special");
})
