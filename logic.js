$("#search").click(function () {
    event.preventDefault();
  
    let numOfOptions = $('#numOfOptionsInput').val().trim();
    let activityType = $('#activityTypeInput').val().trim();
    let numOfPeople = $('#numOfPeopleInput').val().trim()
    let gotime = $('#gotimeInput').val().trim()


     for (let i = 0; i < numOfOptions; i++) {
        let item = $('<div class="suggestion">')
        let options =  $('<span>').text(numOfOptions);
        let act = $('<span>').text(activityType);
        let people = $('<span>').text(numOfPeople);
        let time = $('<span>').text(gotime);
        let like = $('<button class="btn btn-like">').text("like")
        let dislike = $('<button class="btn btn-dislike">').text("dislike")
        item.append(options, act, people, time, like, dislike);
        $('#suggestions').append(item)
        $('.suggestion').addClass('badge-secondary') 
    };


});

$("#clear").click(function () {
    $('#suggestions').empty();
  });