// the random buttom displays the 
$("#random").click(function () {
    $('#suggestions-list').empty();
    $('#suggestions-map').empty();
  
   database.ref('num/').on("value", function(numSnap) {
  
  
  let randomKey
  
   for (j = 0; j < 3; j++) {
      
      randomKey = Math.floor(Math.random() * Number(numSnap.val().dataCount) + 1)
  
      console.log(j)
  
       database.ref(randomKey +'/').once('value').then(function(snapshot) {
        console.log(snapshot.val().name);
  
  
          let randomItem = $('<div class="suggestion">');
          //let options =  $('<span>').text(j + 1 + ' ');
          let randomName = $('<span>').text(snapshot.val().name);
          let randomAddress= $('<span>').text(snapshot.val().address);
          let randomDescription = $('<div class="description">').text(snapshot.val().discripton);
            randomItem.append(randomName, randomAddress, randomDescription);
         
                $('#suggestions-list').append(randomItem)
                $('.suggestion').addClass('list-group-item list-group-item-action list-group-item') 
      });
    }
       });
      }); 
  