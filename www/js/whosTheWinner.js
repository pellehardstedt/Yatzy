players.push(playerObject1);
players.push(playerObject2);
players.push(playerObject3);
players.push(playerObject4);

var playersSorted = [];

function winner(players){
    var playersSorted = players.slice();

    playersSorted.sort(function (b, a) {
        if (a.score > b.score) {
          return 1;
        }
        if (a.score < b.score) {
          return -1;
        }
        return 0;
    });
    

    return playersSorted;
}

function storeScore(playerArray){
    playerArray.forEach(function(playerActive, i){
        highscore.forEach(function(playerHighscore, i){
            if(playerActive.score > playerHighscore.score){
                highscore.splice(i, 0, playerActive);
                highscore.pop();
                return;
            }
        });
    });
    console.log(highscore);
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

//declaring the array to be sorted and placing player objects in it. should be a global variable.
var highscore = [playerObject1, playerObject2, playerObject3, playerObject4, playerObject5, playerObject6, playerObject7, playerObject8];