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
      //bool for checking if the current player is placed
      var playerPlaced = 0;
      //if the parsed (stored) highscore is not empty
      if(parsedHighscore !== null){
          //check with each highscore-position
          parsedHighscore.forEach(function(playerHighscore, i){
            if(playerActive.scoreTotal > playerHighscore.scoreTotal &&  playerPlaced===0){
              playerPlaced = 1;
                //replace position with current player
                parsedHighscore.splice(i, 0, playerActive);
                console.log("position " + i + " replaced by " + playerActive.name);
                if(parsedHighscore.length>=11){
                  parsedHighscore.pop();
                }
                return;
            }
          });
        //limit parsedHighscore to top 10
        parsedHighscore.slice(0,10);
        //Use parsedHighscore to update global array 'highscore'
        highscore = parsedHighscore;
      }
      else {
        highscore.push(playerActive);
      }
    });
    //stringify parsedHighscore to update the localStorage-highscore
    localStorage.setItem("highscore", JSON.stringify(highscore));
}


// var playerObject1 = {
//   playerNo: 1,
//   name: "Freddy",
//   scoreBonus: 0,
//   scoreTotal: 0,
// };

// var playerObject2 = {
//   playerNo: 2,
//   name: "Tommy",
//   scoreBonus: 0,
//   scoreTotal: 0,
// };

// var playerObject3 = {
//   playerNo: 3,
//   name: "Victor",
//   scoreBonus: 0,
//   scoreTotal: 0,
// };

// var playerObject4 = {
//   playerNo: 4,
//   name: "Karl",
//   scoreBonus: 0,
//   scoreTotal: 0,
// };

// var playerObject5 = {
//   playerNo: 3,
//   name: "Nanna",
//   scoreBonus: 0,
//   scoreTotal: 0,
// };
// var playerObject6 = {
//   playerNo: 3,
//   name: "Olle",
//   scoreBonus: 0,
//   scoreTotal: 0,
// };
// var playerObject7 = {
//   playerNo: 3,
//   name: "Fabian",
//   scoreBonus: 0,
//   scoreTotal: 0,
// };
// var playerObject8 = {
//   playerNo: 3,
//   name: "Beata",
//   scoreBonus: 0,
//   scoreTotal: 0,
// };
// var playerObject9 = {
//   playerNo: 3,
//   name: "Edde",
//   scoreBonus: 0,
//   scoreTotal: 0,
// };
// var playerObject10 = {
//   playerNo: 3,
//   name: "babian",
//   scoreBonus: 0,
//   scoreTotal: 0,
// };

//declaring the array to be sorted and placing player objects in it. should be a global variable.
var highscore = [];