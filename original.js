$("#search").click(function () {
    event.preventDefault();

     //a valid, fully-formed foursquare API request that includes these parameters 
     //looks like this:
     let subject = $('#activityTypeInput').val().toLowerCase();
     let locationInput = $('#locationInput').val().trim() + ' ';
     console.log(locationInput);
     let limit = $('#numOfOptionsInput').val();
     let timeInput = $('#gotimeInput').val();
     let dayInput = $('#dayInput').val();
        let d = new Date();
        let n = d.getDay();
        let day = "";
        if (dayInput == n) {
            day = "";
        }
        else {
            day = "any";
        }
        console.log(day);
    

    //  if (dayInput === )
     let priceInput = $('#priceInput').val();
     //let location = "Seattle, WA";


     //let numOfPeople = $('#numOfPeopleInput').val().trim() + ' ';

     var clientID = "UWNQG4U3L43EJK21FJS5FWEYSXD3GCFZIJCFHBWWNN3QVCLY";
     var client_secret = "VQWGC1GO2UFFVXVYI2MYWUFLNW2AM3CQADXRCJ21NGSNUJRV";

    var queryURL = 'https://api.foursquare.com/v2/venues/explore' + "?client_id=" + clientID +
         "&client_secret=" + client_secret + "&near=" + locationInput + "&section=" + subject + "&time=any" +
         "&day=" + day + "&price=" + priceInput + "&v=20181129";
     //location needs to be in longitude and latitude
     console.log(queryURL);

     $.ajax({
         url: queryURL,
         method: "GET"
     }).then(function (response) {
         var results = response.response.groups[0].items
         console.log(results);

         //$('#suggestions-map').hide();

    
      for (let i = 0; i < limit; i++) {
        let listItem = $('<div class="suggestion">');
        let options =  $('<span>').text(i + 1 + ' ');
        let type = $('<span>').text(results[i].venue.name);

        let venueID = results[i].venue.id;


            let itemAddress = $("<div class='address'>");
            //itemAddress.text(JSON.stringify(results[i].venue.location.formattedAddress));
            let address = results[i].venue.location.formattedAddress;
            itemAddress.text(address[0] + " " + address[1]);
            
            let itemDescription = $("<div class='description'>");
            itemDescription.text("Activity Description: " + JSON.stringify(results[i].venue.categories[0].name));
            
            // listItem.append(itemLink, dislike, like)
            listItem.append(type, itemAddress, itemDescription);
            $('#suggestions-list').append(listItem)
            $('.suggestion').addClass('list-group-item list-group-item-action list-group-item') 


        };



    
 });
});
 
 $("#clear").click(function () {
    $('#suggestions-list').empty();
     $('#suggestions-map').empty();
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

