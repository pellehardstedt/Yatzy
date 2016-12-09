//declaring placeholder player objects
var playerObject1 = {
  name: "Per",
  score: 10,
};

var playerObject2 = {
  name: "Maja",
  score: 12,
};

var playerObject3 = {
  name: "Moroten",
  score: 5,
};

var playerObject4 = {
  name: "Jägaren",
  score: 120,
};

//declaring the array to be sorted and placing player objects in it. should be a global variable.
var result = [playerObject1, playerObject2, playerObject3, playerObject4];

//da real sorting being done
function highscoreList(resultArray){
  resultArray.sort(function (b, a) {
    if (a.score > b.score) {
      return 1;
    }
    if (a.score < b.score) {
      return -1;
    }
    return 0;
  });
}

//event listener on button click
$('body').on('click', '#highscore-button', function(){
  
  //clear modal so that list dont duplicates when closing and opening.
  $('.modal-body-highscore tbody').empty();

  highscoreList(result);
  result.forEach(function(player, i){
    $('.modal-body-highscore tbody').append('<tr><td>' + (i+1) +'</td><td>'+ player.name + '</td><td>' + player.score + '</td></tr>');
  });
});