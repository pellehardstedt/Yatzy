//the real sorting being done
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
  var highscorePrint = JSON.parse(localStorage.getItem("highscore"));
  //if the stored highscore isnt empty
  if (highscorePrint !== null){
    //for each highscore position
    highscorePrint.forEach(function(player, i){
      $('.modal-tbody-highscore').append('<tr><td>' + (i+1) +'</td><td>'+ player.name + '</td><td>' + player.scoreTotal + '</td></tr>');
    });
  }
  //if the highscore is empty, print this instead
  else{
    $('.modal-tbody-highscore').append('<tr><td>Ingen highscore sparad</td></tr>');
  }
});