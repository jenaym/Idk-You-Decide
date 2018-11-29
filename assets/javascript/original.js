
$("#search").click(function () {

    event.preventDefault();
    $('#suggestions-list').empty();
    $('#suggestions-map').empty();
    $("#invalidSubject").empty();

     //a valid, fully-formed foursquare API request that includes these parameters 
     //looks like this:
     let limit = $('#numOfOptionsInput').val().trim() + ' ';
     //var outdoor = $("#outdoor").val();

     let subject = $('#activityTypeInput').val().trim() + ' ';

     if (subject === ' ') {
         $("#invalidSubject").text("Please enter the type of activity or click random");
     };
     //let numOfPeople = $('#numOfPeopleInput').val().trim() + ' ';
     //let time = $('#gotimeInput').val().trim() + ' ';

     var location = "Seattle, WA";
     var clientID = "UWNQG4U3L43EJK21FJS5FWEYSXD3GCFZIJCFHBWWNN3QVCLY";
     var client_secret = "VQWGC1GO2UFFVXVYI2MYWUFLNW2AM3CQADXRCJ21NGSNUJRV";
    //  var queryURL = 'https://api.foursquare.com/v2/venues/search' + "?client_id=" + clientID +
    //      "&client_secret=" + client_secret + "&ll" + location + "&query" + subject + "&v" + date;
            var queryURL = 'https://api.foursquare.com/v2/venues/search' + "?client_id=" + clientID +
         "&client_secret=" + client_secret + "&near=" + location + "&query=" + subject + "&v=20181127"
     //location needs to be in longitude and latitude
     console.log(queryURL);

     $.ajax({
         url: queryURL,
         method: "GET"
     }).then(function (response) {
         var results = response;
         console.log(results);
         console.table(results.response.venues)

         $('#suggestions-map').hide();

    
      for (let i = 0; i < limit; i++) {
        let listItem = $('<div class="suggestion">');
        let options =  $('<span>').text(i + 1 + ' ');
        let type = $('<span>').text(results.response.venues[i].name);
        let venueID = results.response.venues[i].id;

        let linkURL = "https://api.foursquare.com/v2/venues/" + venueID + "?client_id=" + clientID +
        "&client_secret=" + client_secret + "&v=20181127";
        console.log(linkURL);
        $.ajax({
            url: linkURL,
            method: "GET"
        }).then(function (linkResponse) {
            console.log(linkResponse);
            let itemLink = $('<a href="#">')
            itemLink.attr("href", linkResponse.response.venue.url)

            //let photo = $('<img>').attr('src', linkResponse.response.venue.bestPhoto.source.canonicalUrl);

            
            // itemLink.append(options, type, people, time);
            itemLink.append(type);
            let itemAddress = $("<div class='address'>");
            itemAddress.text(linkResponse.response.venue.location.address);
            let itemLikes = $("<div class='likes'>");
            itemLikes.text(linkResponse.response.venue.likes.count);
            
            // listItem.append(itemLink, dislike, like)
            listItem.append(itemLink, itemAddress, itemLikes);
            $('#suggestions-list').append(listItem)
            $('.suggestion').addClass('list-group-item list-group-item-action list-group-item') 

            database.ref().push({
                name: results.response.venues[i].name,
                address: linkResponse.response.venue.location.address,
                link: linkResponse.response.venue.url,
        
              });


        });

    };
 });
 

$('#mapView').click (function () {
    $('#suggestions-list').hide();
    $('#suggestions-map').show();
  }); 

  $('#listView').click (function () {
    $('#suggestions-list').show();
    $('#suggestions-map').hide();
  }); 

        

         //var activityDiv = $("<div class = 'activity'>");

         //using the foursquare API to find recommended places using
         //users' input parameters

         // storing the location of recommended spot
         //var location = response.location;

         // storing rating of the place

         //storing 
     });

    //  //Weather API
    //  var weatherAPI_key = "c4fb90d5728ed1563993c1a62caaf631";

    //  var weatherURL = "https://api.openweathermap.org/data/2.5/weather? + q=" + location + "&appid=" + weatherAPI_key;

    //  $.ajax({
    //      url: weatherURL,
    //      method: "GET"
    //  }).then(function (response) {
    //      var results = response.data;

    //  });

    //  //Google API 
    //  var googleAPI_key = "AIzaSyC7vnbVasWSJ-2i10phXjk_Q07yE6tOa-M";

    //  var mapsURL = "https://maps.googleapis.com/maps/api/js?key=" + googleAPI_key + "&callback=initMap"

    //  $.ajax({
    //      url: mapsURL,
    //      method: "GET"
    //  }).then(function (response) {
    //      var results = response.data;

    //  });

//  });