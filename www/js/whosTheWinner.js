players.push(playerObject1);
players.push(playerObject2);
players.push(playerObject3);
players.push(playerObject4);

var playersSorted = [];

//input player array
function winner(playerArray){
    var playersSorted = playerArray.slice();
    //sort to 'playersSorted'
    playersSorted.sort(function (b, a) {
        if (a.score > b.score) {
          return 1;
        }
        if (a.score < b.score) {
          return -1;
        }
        return 0;
    });
    //playersSorted is returned. NOT the original player-array.
    return playersSorted;
}


//insert 'playersSorted' from the prior function
function storeScore(playerArray){

    //Parse localStorage into (non-global) array 'parsedHighscore'
    var parsedHighscore = JSON.parse(localStorage.getItem("highscore"));

    //for each player
    playerArray.forEach(function(playerActive, i){
      //check with each highscore-position
        parsedHighscore.forEach(function(playerHighscore, i){
            if(playerActive.score > playerHighscore.score){
                //replace position with current player
                parsedHighscore.splice(i, 0, playerActive);
                if(parsedHighscore.length>=10){
                  parsedHighscore.pop();
                }
                return;
            }
        });
    });
    
    //Use parsedHighscore to update global array 'highscore'    
    highscore = parsedHighscore;
    //stringify parsedHighscore to update the localStorage-highscore
    localStorage.setItem("highscore", JSON.stringify(parsedHighscore));

    // console.log(stringHighscore);
    // localStorage.setItem("highscore", stringHighscore);
    // parseEd = JSON.parse(localStorage.getItem("highscore"));
    // console.log(parseEd);
}


var playerObject1 = {
  playerNo: 1,
  name: "Freddy",
  score: 100,
};

var playerObject2 = {
  playerNo: 2,
  name: "Tommy",
  score: 95,
};

var playerObject3 = {
  playerNo: 3,
  name: "Victor",
  score: 90,
};

var playerObject4 = {
  playerNo: 4,
  name: "Karl",
  score: 85,
};

var playerObject5 = {
  playerNo: 3,
  name: "Nanna",
  score: 80,
};
var playerObject6 = {
  playerNo: 3,
  name: "Olle",
  score: 75,
};
var playerObject7 = {
  playerNo: 3,
  name: "Fabian",
  score: 70,
};
var playerObject8 = {
  playerNo: 3,
  name: "Beata",
  score: 65,
};
var playerObject9 = {
  playerNo: 3,
  name: "Edde",
  score: 25,
};
var playerObject10 = {
  playerNo: 3,
  name: "babian",
  score: 11,
};

//declaring the array to be sorted and placing player objects in it. should be a global variable.
var highscore = [playerObject1, playerObject2, playerObject3, playerObject4, playerObject5, playerObject6, playerObject7, playerObject8, playerObject9, playerObject10];



