let API_KEY = "fe44bce512da445dac779bf276a255f5"

  // Initialize Firebase

  var config = {
    apiKey: "AIzaSyCPNtdBaMWSmmCGakJ4GQ2UX6hz4uU2XsQ",
    authDomain: "idk-you-decide.firebaseapp.com",
    databaseURL: "https://idk-you-decide.firebaseio.com",
    projectId: "idk-you-decide",
    storageBucket: "idk-you-decide.appspot.com",
    messagingSenderId: "993304386734"
  };
  firebase.initializeApp(config);


//Create a variable to reference the database
var database = firebase.database();




$("#random").click(function () {

   database.ref().on("click", function(snapshot) {
      console.log(snapshot.val().name);
  
  let randomItem = $('<div class="suggestion">');
          
          let randomName = $('<span>').text(snapshot.val().name);
          let RandomAddress= $('<span>').text(snapshot.val().address);
  
          listItem.append(randomName, RandomAddress);
          let itemLink = $('<a href="#">')
              itemLink.attr("href", snapshot.val().link)
  
              $('#suggestions-list').append(randomItem)
              $('.suggestion').addClass('list-group-item list-group-item-action list-group-item') 
  });
  
  
    }); 



  // let URL_Weather  = "api.openweathermap.org/data/2.5/forecast";
  // URL_Weather  += '?zip=98105&appid=' + API_KEY_Weather;
//   '?' + $.param({
//     // 'id': 524901,
//     'appid': API_KEY_Weather,
//   });
// console.log(URL_Weather)

// $.ajax({
//     url: URL_Weather,
//     method: "GET"
//   }).then(function(response) {
//     console.log(response.city.name)

//     // for (let i = 0; i < 10; i++) {


//     // };

//   })  .fail(function (err) {
//     throw err;
//   });
