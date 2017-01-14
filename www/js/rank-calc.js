//global array
var playersSorted = [];

//input player array
function playersRanked(){
    playersSorted = players.slice();
    //sort to 'playersSorted'

    playersSorted.sort(function (b, a) {
        if (a.scoreTotal > b.scoreTotal) {
          return 1;
        }
        if (a.scoreTotal < b.scoreTotal) {
          return -1;
        }
        return 0;
    });
}
//insert 'playersSorted' from the prior function
function storeScore(){
    var parsedHighscore = JSON.parse(localStorage.getItem("highscore"));
    //for each player
    playersSorted.forEach(function(playerActive, i){
      //variable for checking if the current player is placed
      var playerPlaced = false;
      if(playerActive.bot === true){
        playerPlaced = true;
      }
      //if the parsed (stored) highscore is not empty
      if(parsedHighscore !== null){
          //check with each highscore-position
          parsedHighscore.forEach(function(playerHighscore, i){
            if(playerActive.scoreTotal > playerHighscore.scoreTotal &&  playerPlaced===false){
              playerPlaced = true;
                //replace position with current player
                parsedHighscore.splice(i, 0, playerActive);
                if(parsedHighscore.length>=11){
                  parsedHighscore.pop();
                }
                return;
            }
          });
          if(playerPlaced===false){
            parsedHighscore.push(playerActive);
          }
        //limit parsedHighscore to top 10
        parsedHighscore = parsedHighscore.slice(0,10);
        //Use parsedHighscore to update global array 'highscore'
        highscore = parsedHighscore;
      }
      else {
        if(playerActive.bot === false){
          highscore.push(playerActive);
        }
      }
    });
    //stringify parsedHighscore to update the localStorage-highscore
    localStorage.setItem("highscore", JSON.stringify(highscore));
}

var highscore = [];