//business logic

function Players (user) {
  this.user = user,
  this.total = 0,
  this.turn = 0
}

Players.prototype.rollDi = function() {
  var roll = Math.floor(Math.random()*(6) + 1);
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

Players.prototype.hold = function() {
  this.total += this.turn;
  console.log(this.total);
  this.turn = 0;
  return this.total;
}



//user interface logic

$(document).ready(function() {
  // Player One
  var turnRoll = $("#roll");
  var holdTurn = $("#hold");

  turnRoll.click(function() {
    var result = playerOne.rollDi();
    $("#turnRoll").text(result);
    console.log(result)
    console.log(playerOne);
  });

  holdTurn.click(function() {
    var total = playerOne.hold();
    $(".hold-turn").text(total);
    $(".player-one").hide();
    $(".player-two").show();
    console.log(total)
    console.log(playerOne);
  });

// Player Two

var turnRoll2 = $("#roll2");
var holdTurn2 = $("#hold2");
turnRoll2.click(function() {
  var result2 = playerTwo.rollDi();
  $("#turnRoll2").text(result2);
  console.log(result2)
  console.log(playerTwo);
});

holdTurn2.click(function() {
  var total2 = playerTwo.hold();
  $(".hold-turn2").text(total2);
  $(".player-two").hide();
  $(".player-one").show();
  console.log(total2)
  console.log(playerTwo);
});

var playerOne = null;
var playerTwo = null;

  $("form#userNames").submit(function(event){
    event.preventDefault();
    var inputtedPlayerOne = $("input#player-one").val();
    var inputtedPlayerTwo = $("input#player-two").val();

    playerOne = new Players(inputtedPlayerOne);
    playerTwo = new Players(inputtedPlayerTwo);

    $("player-one-name").text(playerTwo.user);
    $("#dice").show();
    $("form#userNames").hide();
  });
});
