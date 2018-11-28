 // Initialize Firebase
 var config = {
     apiKey: "AIzaSyCCgXkIctQ_rX_WuZER9veS0Wzrv4PSFMk",
     authDomain: "team7-group-project1.firebaseapp.com",
     databaseURL: "https://team7-group-project1.firebaseio.com",
     projectId: "team7-group-project1",
     storageBucket: "team7-group-project1.appspot.com",
     messagingSenderId: "157931828605"
 };
 firebase.initializeApp(config);

 //Below is the Foursquare Venue Category Hierarchy. Categories that specify a list 
 // of "supported counties"
 var artsAndEnter = "4d4b7104d754a06370d81259";
 var museum = "4bf58dd8d48988d181941735";
 var musicVenue = "4bf58dd8d48988d1e5931735";
 var pachinkoParlor = "5744ccdfe4b0c0459246b4b8"; //supported countries : JP
 var performingArtsVenue = "4bf58dd8d48988d1f2931735";
 var poolHall = "4bf58dd8d48988d1e3931735";
 var publicArt = "507c8c4091d498d9fc8c67a9";
 var raceCourse = "56aa371be4b08b9a8d573514";
 var raceTrack = "4bf58dd8d48988d1f4931735";
 var rollerRink = "52e81612bcbc57f1066b79e9";
 var salsaClub = "52e81612bcbc57f1066b79ec";
 var sambaSchool = "56aa371be4b08b9a8d5734f9"; //supported counties :BR
 var stadium = "4bf58dd8d48988d184941735";
 var themePark = "4bf58dd8d48988d182941735";
 var tourProvider = "56aa371be4b08b9a8d573520";
 var waterPark = "4bf58dd8d48988d193941735";
 var zoo = "4bf58dd8d48988d17b941735";
 var college = "4d4b7105d754a06372d81259";
 var event = "4d4b7105d754a06373d81259";
 var food = "4d4b7105d754a06374d81259";

 //define user's current location
 var x = document.getElementById("demo");
 function getLocation() {
     if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(showPosition);
     } else {
         x.innerHTML = "Geolocation is not supported by this browser.";
     }
 }

 function showPosition(position) {
     x.innerHTML = "Latitude: " + position.coords.latitude +
         "<br>Longitude: " + position.coords.longitude;
 }

 function showError(error) {
     switch (error.code) {
         case error.PERMISSION_DENIED:
             x.innerHTML = "User denied the request for Geolocation."
             break;
         case error.POSITION_UNAVAILABLE:
             x.innerHTML = "Location information is unavailable."
             break;
         case error.TIMEOUT:
             x.innerHTML = "The request to get user location timed out."
             break;
         case error.UNKNOWN_ERROR:
             x.innerHTML = "An unknown error occurred."
             break;
     }
 }

 function showPosition(position) {
     var latlon = position.coords.latitude + "," + position.coords.longitude;

     var img_url = "https://maps.googleapis.com/maps/api/staticmap?center=
     "+latlon+" & zoom = 14 & size = 400 x300 & sensor = false & key = YOUR_: KEY ";

     document.getElementById("mapholder").innerHTML = "<img src='" + img_url + "'>";
 }

 $("button").on("click", function () {

     //a valid, fully-formed foursquare API request that includes these parameters 
     //looks like this:
     var clientID = "UWNQG4U3L43EJK21FJS5FWEYSXD3GCFZIJCFHBWWNN3QVCLY";
     var client_secret = "VQWGC1GO2UFFVXVYI2MYWUFLNW2AM3CQADXRCJ21NGSNUJRV";
     var queryURL = 'https://api.foursquare.com/v2/venues/search' + "?client_id=" + clientID +
         "&client_secret=" + client_secret + "&ll" + location + "&query" + subject + "&v" + date;
     //location needs to be in longitude and latitude

     $.ajax({
         url: queryURL,
         method: "GET"
     }).then(function (response) {
         var results = response.data;
         var restuls = response;

         var activityDiv = $("<div class = 'activity'>");

         //using the foursquare API to find recommended places using
         //users' input parameters

         // storing the location of recommended spot
         var location = response.location;

         // storing rating of the place
         var rating = response.rating;

         //storing 
     });

     //Weather API
     var weatherAPI_key = "c4fb90d5728ed1563993c1a62caaf631";

     var weatherURL = "https://api.openweathermap.org/data/2.5/weather? + q=" + location + "&appid=" + weatherAPI_key;

     $.ajax({
         url: weatherURL,
         method: "GET"
     }).then(function (response) {
         var results = response.data;

     });

     //Google API 
     var googleAPI_key = "AIzaSyC7vnbVasWSJ-2i10phXjk_Q07yE6tOa-M";

     var mapsURL = "https://maps.googleapis.com/maps/api/js?key=" + googleAPI_key + "&callback=initMap"

     $.ajax({
         url: mapsURL,
         method: "GET"
     }).then(function (response) {
         var results = response.data;

     });

 });