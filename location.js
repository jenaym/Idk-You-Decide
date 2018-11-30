//Google map API used to display google maps and collect info from them 

 // google map API information
 var googleAPI_key = "AIzaSyC7vnbVasWSJ-2i10phXjk_Q07yE6tOa-M";
 var mapsURL = "https://maps.googleapis.com/maps/api/js?key=" + googleAPI_key

 //global variables should be accessible from other files
 var title = "Hello";

 //clicking on the mapView 
 $("#mapView").click(function initMap() {
     var map;
     var infowindow;

     //default setting to be in Seattle
     pos = {
         lat: 47.6553216,
         lng: -122.3155712
     };

     map = new google.maps.Map(document.getElementById('map-container-5'), {
         center: pos,
         zoom: 15
     });

     map.set('styles', styles);

     //styles of google map
     var styles = [{

             "elementType": "geometry",
             "stylers": [{
                 "color": "#ebe3cd"
             }]
         },
         {
             "elementType": "labels.text.fill",
             "stylers": [{
                 "color": "#523735"
             }]
         },
         {
             "elementType": "labels.text.stroke",
             "stylers": [{
                 "color": "#f5f1e6"
             }]
         },
         {
             "featureType": "administrative",
             "elementType": "geometry.stroke",
             "stylers": [{
                 "color": "#c9b2a6"
             }]
         },
         {
             "featureType": "administrative.land_parcel",
             "elementType": "geometry.stroke",
             "stylers": [{
                 "color": "#dcd2be"
             }]
         },
         {
             "featureType": "administrative.land_parcel",
             "elementType": "labels.text.fill",
             "stylers": [{
                 "color": "#ae9e90"
             }]
         },
         {
             "featureType": "landscape.natural",
             "elementType": "geometry",
             "stylers": [{
                 "color": "#dfd2ae"
             }]
         },
         {
             "featureType": "poi",
             "elementType": "geometry",
             "stylers": [{
                 "color": "#dfd2ae"
             }]
         },
         {
             "featureType": "poi",
             "elementType": "labels.text.fill",
             "stylers": [{
                 "color": "#93817c"
             }]
         },
         {
             "featureType": "poi.park",
             "elementType": "geometry.fill",
             "stylers": [{
                 "color": "#a5b076"
             }]
         },
         {
             "featureType": "poi.park",
             "elementType": "labels.text.fill",
             "stylers": [{
                 "color": "#447530"
             }]
         },
         {
             "featureType": "road",
             "elementType": "geometry",
             "stylers": [{
                 "color": "#f5f1e6"
             }]
         },
         {
             "featureType": "road.arterial",
             "elementType": "geometry",
             "stylers": [{
                 "color": "#fdfcf8"
             }]
         },
         {
             "featureType": "road.highway",
             "elementType": "geometry",
             "stylers": [{
                 "color": "#f8c967"
             }]
         },
         {
             "featureType": "road.highway",
             "elementType": "geometry.stroke",
             "stylers": [{
                 "color": "#e9bc62"
             }]
         },
         {
             "featureType": "road.highway.controlled_access",
             "elementType": "geometry",
             "stylers": [{
                 "color": "#e98d58"
             }]
         },
         {
             "featureType": "road.highway.controlled_access",
             "elementType": "geometry.stroke",
             "stylers": [{
                 "color": "#db8555"
             }]
         },
         {
             "featureType": "road.local",
             "elementType": "labels.text.fill",
             "stylers": [{
                 "color": "#806b63"
             }]
         },
         {
             "featureType": "transit.line",
             "elementType": "geometry",
             "stylers": [{
                 "color": "#dfd2ae"
             }]
         },
         {
             "featureType": "transit.line",
             "elementType": "labels.text.fill",
             "stylers": [{
                 "color": "#8f7d77"
             }]
         },
         {
             "featureType": "transit.line",
             "elementType": "labels.text.stroke",
             "stylers": [{
                 "color": "#ebe3cd"
             }]
         },
         {
             "featureType": "transit.station",
             "elementType": "geometry",
             "stylers": [{
                 "color": "#dfd2ae"
             }]
         },
         {
             "featureType": "water",
             "elementType": "geometry.fill",
             "stylers": [{
                 "color": "#b9d3c2"
             }]
         },
         {
             "featureType": "water",
             "elementType": "labels.text.fill",
             "stylers": [{
                 "color": "#92998d"
             }]
         }
     ]

     infowindow = new google.maps.InfoWindow();
     var service = new google.maps.places.PlacesService(map);
     service.nearbySearch({
         location: pos,
         radius: 500,        //radius can be adjusted 
         type: ['football'], //type can be changed to search for venues we want 
         postalcode: 98105,  //zip code can be changed to search for venues we want

     }, callback);


     //callback function 
     function callback(results, status) {
         if (status === google.maps.places.PlacesServiceStatus.OK) {
             for (var i = 0; i < results.length; i++) {
                 createMarker(results[i]);
             }
         }
     }

     //creating marker for places
     function createMarker(place) {
         var placeLoc = place.geometry.location;
         var marker = new google.maps.Marker({
             map: map,
             position: place.geometry.location
         });

         //The Basic category includes the following fields:
         //address_component, adr_address, alt_id, formatted_address, 
         //geometry, icon, id, name, permanently_closed, photo, place_id, plus_code, 
         //scope, type, url, utc_offset, vicinity
         google.maps.event.addListener(marker, 'click', function () {
             mainContent = '<div class="info-window">' +
                 '<h3>' + place.name + '</h3>' +
                 '<div class="info-content">' +
                 '<p>' + place.address_component + '</p>' + '<Img src=' + place.icon + '>' +
                 '<p>' + "type: " + place.types + '<br>' +
                 '<p>' + "ratings: " + place.rating + '<br>' +
                 '<p>' + "reviews: " + place.review +
                 '</div>' +
                 '</div>';

             infowindow.setContent(mainContent);
             infowindow.open(map, this);
         });
     }

 });