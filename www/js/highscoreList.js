//declaring the array to be sorted and placing player objects in it. should be a global variable.
// var result = [playerObject1, playerObject2, playerObject3, playerObject4];

//da real sorting being done
function highscoreList(resultArray){
  resultArray.sort(function (b, a) {
    if (a.scoreTotal > b.scoreTotal) {
      return 1;
    }
    if (a.scoreTotal < b.scoreTotal) {
      return -1;
    }
    return 0;
  });
}

//event listener on highscore-button
$('body').on('click', '.highscore-button', function(){
  //clear modal so that list dont duplicates when closing and opening.
  $('.modal-body-highscore tbody').empty();
  highscoreList(players);
  //for each element in 'result'
  highscore.forEach(function(player, i){
    $('.modal-tbody-highscore').append('<tr><td>' + (i+1) +'</td><td>'+ player.name + '</td><td>' + player.scoreTotal + '</td></tr>');
  });
});