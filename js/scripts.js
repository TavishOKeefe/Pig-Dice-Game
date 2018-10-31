//business logic

var playerOne = new Players("user");

function Players (user) {
  this.user = user,
  this.total = 0,
  this.turn = 0
}

Players.prototype.rollDi = function() {
  var roll = Math.floor(Math.random()*(7-1) + 1);
  if (roll !== 1){
  this.turn += roll;
  console.log(this.turn);
} else if (roll === 1){
  alert("anything")
  this.turn = 0;
  console.log(this.turn);
}
  return this.turn;
  console.log("reached end of roll die")
}

Players.prototype.addScore = function() {
  this.total += this.turn
  console.log(this.total);
}



//user interface logic

$(document).ready(function() {
  var turnRoll = $("#roll");
  var holdTurn = $("#hold");

  turnRoll.click(function() {
    var result = playerOne.rollDi();
    console.log(result)
    console.log(playerOne);
  });

  $("form#dice").submit(function(event){
    event.preventDefault();
  });
});
