$(document).ready(function(){
    event.preventDefault();
    // initial parameters and settings
    var options = ["outdoor","indoor"];
    var seasons = ["spring","summer","autumn","winter"];
    var groupSize = 0;

    // Add 
    $("button").on("click",function(){
        event.preventDefault();

        var apikey = 
        var queryURL = 

        $.ajax({
            url:queryURL,
            method:"GET"

        }).then(function(response){
            var results = response.data;

            // dump the container first
            
        })
    })
})