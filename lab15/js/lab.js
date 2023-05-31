// index.js - Lab 15: AJAX - experiment with jQuery and AJAX
// Author: Duncan Moran
// Date: May 30, 2023

//function to utilize API and grab info
function getJoke() {
    //debug
    console.log("button clicked");
    $.ajax({
        //URL for request
        url: "https://api.chucknorris.io/jokes/random",
        //get request for data
        type: "GET",
        data: {},
    })
    //function for what to do with data from API
    .done(function(data) {
        //debug
        console.log(data);
        var joke = data.value;
        var iconURL = data.icon_url;
        $("#output").html("<h3>" + joke);
        $("#output").append("<img src=" + iconURL + ">")
    })  
}

//event listener to initiate getJoke function
$("#activate").click(getJoke);