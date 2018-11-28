var config = {
  apiKey: "AIzaSyCCgXkIctQ_rX_WuZER9veS0Wzrv4PSFMk",
  authDomain: "team7-group-project1.firebaseapp.com",
  databaseURL: "https://team7-group-project1.firebaseio.com",
  projectId: "team7-group-project1",
  storageBucket: "team7-group-project1.appspot.com",
  messagingSenderId: "157931828605"
};
firebase.initializeApp(config);

// create a variable to refer to the database
var database = firebase.database();

$("#search").click(function () {
  event.preventDefault();

  let numOfOptions = $('#numOfOptionsInput').val().trim();
  let activityType = $('#activityTypeInput').val().trim();
  let numOfPeople = $('#numOfPeopleInput').val().trim() + "0101";
  let gotime = $('#gotimeInput').val().trim() + "0101";

  var url = "";
  url += '?' + $.param({
    //'api-term': above user generated veriable,
  });


  $.ajax({
    url: url,
    method: "GET"
  }).then(function (response) {

    for (let i = 0; i < numOfOptions; i++) {
      var tRow = $('<tr>');
      var showOption = $("<td>").text(); //put responce. and then the api the jason retreaving veriable name inside .text()
      let a = $('<a>').attr("href", ); // this adds a link to the enerated inpit

      // puts the Option insize the ancher tag
      showOption.appendTo(a);

      // Append the table row to the table body
      $("tbody").append(tRow);

    };

  }).fail(function (err) {
    throw err;
  });
});

$("#clear").click(function () {
  $('tbody').empty();
});
