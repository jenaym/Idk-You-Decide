$('#suggestions-map').hide();

$("#search").click(function () {
    event.preventDefault();
  
    let numOfOptions = $('#numOfOptionsInput').val().trim() + ' ';
    let activityType = $('#activityTypeInput').val().trim() + ' ';
    let numOfPeople = $('#numOfPeopleInput').val().trim() + ' ';
    let gotime = $('#gotimeInput').val().trim() + ' ';
    
      for (let i = 0; i < numOfOptions; i++) {
        let listItem = $('<div class="suggestion">');
        let options =  $('<span>').text(i + 1 + ' ');
        let type = $('<span>').text(activityType);
        let people = $('<span>').text(numOfPeople);
        let time = $('<span>').text(gotime);
        let like = $('<button class="btn btn-like">').html('<i class="fas fa-thumbs-up"></i>');
        let dislike = $('<button class="btn btn-dislike">').html('<i class="fas fa-thumbs-down"></i>');
        let itemLink = $('<a  href="#">');
        itemLink.append(options, type, people, time);
        listItem.append(itemLink, dislike, like)
        $('#suggestions-list').append(listItem)
        $('.suggestion').addClass('list-group-item list-group-item-action list-group-item') 
    };
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